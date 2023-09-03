import React from "react";
import { useState } from "react";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { ProgressSpinner } from 'primereact/progressspinner';
import { useSelector } from "react-redux";
import { selectScript } from "../../redux/language";

const CheckoutForm = () => {
    const script = useSelector(selectScript)

    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return <ProgressSpinner style={{ width: '30px', height: '30px' }} />;
        }

        setIsProcessing(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: `${window.location.origin}/`,
            },
        });

        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage(script.donations[8]);
        }

        setIsProcessing(false);
    };

    return (
        <form className="container text-center" id="payment-form" onSubmit={handleSubmit}>
            <PaymentElement style={{ margin: '40px auto 20px' }} id="payment-element" />
            <div className="btn-wrapper text-center">

                <button disabled={isProcessing || !stripe || !elements} id="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase"
                >
                    <span id="button-text">
                        {isProcessing ? script.donations[7] : script.donations[6]}
                    </span>
                </button>
            </div>
            {/* Show any error or success messages */}
            {message && <div style={{ color: 'red' }} id="payment-message">{message}</div>}
        </form>
    );
}

export default CheckoutForm