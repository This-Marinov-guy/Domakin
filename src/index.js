import React, { useEffect, useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from './redux/store'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { selectLanguage, setLanguage, setScript } from "./redux/language";
import { BG, EN } from "./util/PAGE_SCRIPT";

const Home = lazy(() => import('./pages/Home'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const About = lazy(() => import('./pages/information/About'));
const Contact = lazy(() => import('./pages/information/Contact'));

const Root = () => {
    const dispatch = useDispatch()

    const language = useSelector(selectLanguage);

    useEffect(() => {
        let storedData = JSON.parse(localStorage.getItem("language"));
        console.log(storedData);
        if (storedData && storedData.language) {
            dispatch(setLanguage(storedData.language))
        }
        switch (language) {
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
    }, [])

    return (
        <BrowserRouter basename={"/"}>
            <Suspense fallback={<div class="quarter-overlay">
                <div class="cv-spinner">
                    <span class="spinner"></span>
                </div>
            </div>}>
                <Switch>
                    <Route exact path="/" component={Home} />

                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />

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
