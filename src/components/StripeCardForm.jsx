import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CARD_STYLE = {
  style: {
    base: {
      fontSize: "16px",
      color: "#0f172a",
      fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
      "::placeholder": { color: "#94a3b8" },
    },
    invalid: { color: "#dc2626" },
  },
};

function CardForm({ clientSecret, onSuccess, onError, totalPrice, currencySymbol, activeLanguage }) {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const isRtl = activeLanguage === "ar";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements || !clientSecret) return;

    setProcessing(true);
    setError(null);

    const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: elements.getElement(CardElement) },
    });

    if (stripeError) {
      setError(stripeError.message);
      onError?.(stripeError.message);
      setProcessing(false);
    } else if (paymentIntent?.status === "succeeded") {
      onSuccess?.();
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{
        padding: "14px 16px", borderRadius: 12,
        border: "1px solid rgba(148,163,184,0.3)",
        background: "#fff", marginBottom: 12,
      }}>
        <CardElement options={CARD_STYLE} />
      </div>
      {error && (
        <div style={{ padding: "8px 12px", borderRadius: 8, background: "#fef2f2", color: "#dc2626", fontSize: 12, marginBottom: 10 }}>
          {error}
        </div>
      )}
      <button
        type="submit"
        disabled={!stripe || processing}
        style={{
          width: "100%", padding: "14px 0", borderRadius: 12, border: "none",
          background: processing ? "#94a3b8" : "#5eabb1", color: "#fff",
          fontSize: 15, fontWeight: 700, cursor: processing ? "default" : "pointer",
          transition: "background 0.2s",
        }}
      >
        {processing
          ? (isRtl ? "جارٍ الدفع..." : "Processing...")
          : (isRtl ? `ادفع ${totalPrice} ${currencySymbol}` : `Pay ${totalPrice} ${currencySymbol}`)}
      </button>
    </form>
  );
}

let stripePromiseCache = {};

export default function StripeCardForm({ publishableKey, clientSecret, onSuccess, onError, totalPrice, currencySymbol, activeLanguage }) {
  if (!publishableKey || !clientSecret) {
    return <div style={{ padding: 20, textAlign: "center", color: "#94a3b8", fontSize: 13 }}>Loading payment form...</div>;
  }

  // Cache stripe promise per key
  if (!stripePromiseCache[publishableKey]) {
    stripePromiseCache[publishableKey] = loadStripe(publishableKey);
  }

  return (
    <Elements stripe={stripePromiseCache[publishableKey]} options={{ clientSecret }}>
      <CardForm
        clientSecret={clientSecret}
        onSuccess={onSuccess}
        onError={onError}
        totalPrice={totalPrice}
        currencySymbol={currencySymbol}
        activeLanguage={activeLanguage}
      />
    </Elements>
  );
}
