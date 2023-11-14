import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripePromise: Stripe | null;

const getStripe = async () => {
  if (!stripePromise) {
    stripePromise = await loadStripe(
      "pk_test_51OAvhTE1znhTYixsadWLLmCJfrHVPL0uWXTqabkySByTrTTO4R0BugTYXe02WvQ7hrwrUE9YseHuoJaYQ8D69ZT300lGbF33fO"
    );
  }
  return stripePromise;
};
export default getStripe;