import React, { useEffect, useState, useRef, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from './redux/store'
import { useHttpClient } from './hooks/http-hook'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { selectScript, setLanguage, setScript } from "./redux/language";
import { BG, EN } from "./util/PAGE_SCRIPT";
import { selectError, selectErrorMsg } from "./redux/error";
import { Toast } from 'primereact/toast';
import Agents from "./pages/information/Agents";
import { setFeedbacks } from "./redux/feedbacks";
import { PrimeReactProvider } from 'primereact/api';
    
// styles
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import './index.scss'

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
                const responseData = await sendRequest('feedback/get-feedbacks');
                dispatch(setFeedbacks(responseData.feedbacks.filter(feedback => feedback.approved === true)))
            } catch (err) {
            }
        }
        fetchFeedbacks()
    }, [sendRequest])

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
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/services" element={<Services />} />

                        <Route path="/about" element={<About />} />
                        <Route path="/terms&policy" element={<TermsAndPolicy />} />
                        <Route path="/feedbacks&donations" element={<FeedbackPage />} />
                        <Route path="/recommendations" element={<Recommendations />} />
                        <Route path='/agents' element={<Agents />} />
                        <Route path="/contact" element={<Contact />} />

                        <Route path='/services/viewing' element={<Viewing setSuccess={setSuccess} />} />
                        <Route path='/services/renting' element={<Renting setSuccess={setSuccess} />} />
                        <Route path='/services/lending' element={<Lending setSuccess={setSuccess} />} />
                        <Route path='/services/give-a-room' element={<LendingEN setSuccess={setSuccess} />} />

                        <Route path='/services/emergency-housing' exact element={<EmergencyHousing />} />
                        <Route path='/services/emergency-housing/properties' exact element={<EmergencyHousingProperties setSuccess={setSuccess} />} />

                        <Route path='/services/emergency-housing/add-listing' exact element={<EmergencyHousingAddListing setSuccess={setSuccess} />
                        } />
                        <Route path="/properties/:propertyId" element={<PropertyDetails />} />
                        <Route path="*" element={<ErrorPage />} />

                    </Routes>
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
