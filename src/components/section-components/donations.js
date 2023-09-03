import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CheckoutForm from "../ui/checkoutForm.jsx";
import { loadStripe } from "@stripe/stripe-js";
import { ProgressSpinner } from 'primereact/progressspinner';
import { useSelector } from "react-redux";
import { selectScript } from "../../redux/language.js";

const schema = yup.object().shape({
    name: yup.string(),
    amount: yup.number().positive(script.donations[9]).min(2, script.donations[10])
        .required(script.donations[11]),
    comments: yup.string()
});

const Donations = () => {
    const script = useSelector(selectScript);

    const [loading, setLoading] = useState(false)
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");

    return (

        <div className="container mt-40">
            <div className="text-center mb-40">
                <h2>{script.donations[0]}</h2>
                <h3 style={{ marginTop: "-15px" }}>{script.donations[1]}</h3>
            </div>
            {(clientSecret && stripePromise ? <Elements stripe={stripePromise} options={{ clientSecret }} >
                <CheckoutForm />
            </Elements> : <Formik
                className="inner"
                style={{ display: 'flex' }}
                validationSchema={schema}
                onSubmit={async (values) => {
                    try {
                        fetch(process.env.REACT_APP_TEST_SERVER_URL + "payments/donation/config").then(async (r) => {
                            const { publishableKey } = await r.json();
                            setStripePromise(loadStripe(publishableKey));
                        });
                        fetch(process.env.REACT_APP_TEST_SERVER_URL + "payments/donation/create-payment-intent", {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                name: values.name,
                                amount: values.amount,
                                comments: values.comments
                            }),

                        }).then(async (result) => {
                            var { clientSecret } = await result.json();
                            setClientSecret(clientSecret);
                        });
                        setLoading(true)
                    } catch (err) {
                    }
                }}
                initialValues={{
                    name: '',
                    amount: '',
                    comments: '',
                }}
            >
                {() => (
                    <Form
                        id="form"
                    >
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-6">
                                <div className="rnform-group">
                                    <Field
                                        type="text"
                                        placeholder={script.donations[2]}
                                        name="name"
                                    ></Field>
                                    <ErrorMessage
                                        className="error"
                                        name="name"
                                        component="div"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-6     ">
                                <div className="rnform-group product-meta-date">
                                    <Field
                                        type="number"
                                        step="0.5"
                                        placeholder={script.donations[3]}
                                        name="amount"
                                        inputMode="numeric"
                                        min="2"
                                    ></Field>
                                    <ErrorMessage
                                        className="error"
                                        name="amount"
                                        component="div"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-12 mt--40">
                                <div className="rnform-group">
                                    <Field
                                        style={{ padding: '1% 0 0 3%' }}
                                        as='textarea'
                                        placeholder={script.donations[4]}
                                        name="comments"
                                    ></Field>
                                    <ErrorMessage
                                        className="error"
                                        name="comments"
                                        component="div"
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="btn-wrapper text-center">
                            <button disabled={loading} className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">{loading ? <ProgressSpinner style={{ width: '30px', height: '30px' }} />

                                : script.donations[5]}</button>
                        </div>
                    </Form>
                )}
            </Formik>
            )}
        </div>
    )
}

export default Donations;



