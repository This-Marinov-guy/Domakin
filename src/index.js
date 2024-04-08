import React, { useEffect, useState, useRef, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from './redux/store'
import { useHttpClient } from './hooks/http-hook'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { selectLanguage, selectScript, setLanguage, setScript } from './redux/language'
import { BG, EN } from "./util/PAGE_SCRIPT";
import { selectError, selectErrorMsg } from "./redux/error";
import { Toast } from 'primereact/toast';
import Agents from "./pages/information/Agents";
import { setFeedbacks } from "./redux/feedbacks";
import { PrimeReactProvider } from 'primereact/api';

// styles
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

//general pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));

//information
const About = lazy(() => import('./pages/information/About'));
const TermsAndPolicy = lazy(() => import('./pages/information/TermsAndPolicy'));
const Contact = lazy(() => import('./pages/information/Contact'));
const FeedbackPage = lazy(() => import('./pages/information/FeedbackPage'));
const Recommendations = lazy(() => import('./pages/information/Recommendations'));


//actions
const Viewing = lazy(() => import('./pages/actions/Viewing'));
const Renting = lazy(() => import('./pages/actions/Renting'));
const Lending = lazy(() => import('./pages/actions/Lending'));
const LendingEN = lazy(() => import('./pages/actions/LendingEN'));
const EmergencyHousing = lazy(() => import('./pages/actions/EmergencyHousing'));

//emergency-housing
const EmergencyHousingProperties = lazy(() => import('./pages/emergency-housing/EmergencyHousingProperties'));
const EmergencyHousingAddListing = lazy(() => import('./pages/emergency-housing/EmergencyHousingAddListing'));


//details
const PropertyDetails = lazy(() => import('./pages/details/PropertyDetails'));


const Root = () => {
    const [success, setSuccess] = useState({
        heading: null,
        message: null
    });

    const toast = useRef(null);

    const dispatch = useDispatch()

    const { sendRequest } = useHttpClient()

    const script = useSelector(selectScript)
    const language = useSelector(selectLanguage)

    const error = useSelector(selectError)
    const errorMessage = useSelector(selectErrorMsg);

    useEffect(() => {
        let storedLanguage = localStorage.getItem("language");
        if (storedLanguage) {
            dispatch(setLanguage(storedLanguage))
        }
        switch (storedLanguage) {
            case 'bg':
                dispatch(setScript(BG))
                break;
            case 'en':
                dispatch(setScript(EN))
                break;
            default:
                dispatch(setScript(BG))
                break;
        }
    }, [dispatch])

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const responseData = await sendRequest(`feedback/get-feedbacks/${language}`);
                dispatch(setFeedbacks(responseData.feedbacks))
            } catch (err) {
            }
        }
        fetchFeedbacks()
    }, [language])

    useEffect(() => {
        if (toast.current && errorMessage) {
            toast.current.show({
                severity: 'error',
                summary: script.error[0],
                detail: errorMessage,
                sticky: true
            });
        }
    }, [error]);

    useEffect(() => {
        if (toast.current && success.heading && success.message) {
            toast.current.show({
                severity: 'success',
                summary: success.heading,
                detail: success.message,
                sticky: true
            });
        }
    }, [success])

    return (
        <BrowserRouter basename={"/"}>
            <PrimeReactProvider>
                <Suspense fallback={<div className="quarter-overlay">
                    <div className="cv-spinner">
                        <span className="spinner"></span>
                    </div>
                </div>}>
                    <Toast ref={toast} />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/services" component={Services} />

                        <Route path="/about" component={About} />
                        <Route path="/terms&policy" component={TermsAndPolicy} />
                        <Route path="/feedbacks&donations" component={FeedbackPage} />
                        <Route path="/recommendations" component={Recommendations} />
                        <Route path='/agents' component={Agents} />
                        <Route path="/contact" component={Contact} />

                        <Route path='/services/viewing' >
                            <Viewing setSuccess={setSuccess} />
                        </Route>
                        <Route path='/services/renting' >
                            <Renting setSuccess={setSuccess} />
                        </Route>
                        <Route path='/services/lending' >
                            <Lending setSuccess={setSuccess} />
                        </Route>
                        <Route path='/services/give-a-room' >
                            <LendingEN setSuccess={setSuccess} />
                        </Route>
                        <Route path='/services/emergency-housing' exact>
                            <EmergencyHousing />
                        </Route>
                        <Route path='/services/emergency-housing/properties' exact>
                            <EmergencyHousingProperties setSuccess={setSuccess} />
                        </Route>
                        <Route path='/services/emergency-housing/add-listing' exact>
                            <EmergencyHousingAddListing setSuccess={setSuccess} />
                        </Route>

                        <Route path="/properties/:propertyId" component={PropertyDetails} />
                        <Route path="*" component={ErrorPage} />

                    </Switch>
                </Suspense>
            </PrimeReactProvider>
        </BrowserRouter>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <Root />
    </Provider>);

// serviceWorker.unregister();
