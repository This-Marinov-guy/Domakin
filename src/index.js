import React, { useEffect, useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Home = lazy(() => import('./pages/Home'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const About = lazy(() => import('./pages/information/About'));
const Contact = lazy(() => import('./pages/information/Contact'));

const Root = () => {
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
root.render(<Root />);

// serviceWorker.unregister();
