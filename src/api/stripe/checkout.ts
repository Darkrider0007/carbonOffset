import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const AddToWallet = async ({
  amount,
  tokens,
  paymentType = "subscription",
  duration = 1,
  clientType = "individual",
  businessId,
}: any) => {
  console.log(`Added ${amount} to wallet`);
  const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

  if (!stripe) {
    console.error("Stripe failed to load.");
    return;
  }

  const token = Cookies.get("accessToken");
  if (!token) {
    return { message: "No token found" };
  }

  const costDetails = {
    totalCost: amount,
    totalCredit: tokens,
    paymentType,
    duration,
    clientType,
    businessId,
  };

  try {
    const response = await axios.post(
      `${BASE_URL}/api/create-checkout-session/token-purchase`,
      costDetails,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const session = response.data;

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    console.log(result);

    if (result.error) {
      console.error(result.error.message);
    }
  } catch (error) {
    console.error("Payment failed:", error);
  }
};
