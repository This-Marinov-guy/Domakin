import React, { useEffect, useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from './redux/store'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { setLanguage, setScript } from "./redux/language";
import { BG, EN } from "./util/PAGE_SCRIPT";
import { selectError, selectErrorMsg } from "./redux/error";
import Error from './components/ui/Error'
import Agents from "./pages/information/Agents";

//general pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));

//information
const About = lazy(() => import('./pages/information/About'));
const Contact = lazy(() => import('./pages/information/Contact'));

//actions
const Lending = lazy(() => import('./pages/actions/Lending'));
const Viewing = lazy(() => import('./pages/actions/Viewing'));

const Root = () => {
    const [success, setSuccess] = useState(null);

    const dispatch = useDispatch()

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

    return (
        <BrowserRouter basename={"/"}>
            <Suspense fallback={<div className="quarter-overlay">
                <div className="cv-spinner">
                    <span className="spinner"></span>
                </div>
            </div>}>
                {error && <Error errorMessage={errorMessage} />}
                {success}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/services" component={Services} />

                    <Route path="/about" component={About} />
                    <Route path='/agents' component={Agents} />
                    <Route path="/contact" component={Contact} />

                    <Route path="/lending" component={Lending} />
                    <Route path='/services/viewing' >
                        <Viewing setSuccess={setSuccess} />
                    </Route>

                    <Route path="*" component={ErrorPage} />

                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <Root />
    </Provider>);

// serviceWorker.unregister();
