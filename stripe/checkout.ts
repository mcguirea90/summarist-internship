import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { Stripe, loadStripe } from "@stripe/stripe-js";

export async function createCheckoutSession(uid: string, priceId: string) {
  const firestore = firebase.firestore();

  const checkoutSessionRef = await firestore
    .collection("users")
    .doc(uid)
    .collection("checkout_sessions")
    .add({
      price: priceId,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });

  checkoutSessionRef.onSnapshot(async (snap) => {
    const data = snap.data();
    const sessionId: string | undefined = data?.sessionId;
    const stripe = await loadStripe(
        'pk_test_51OAvhTE1znhTYixsadWLLmCJfrHVPL0uWXTqabkySByTrTTO4R0BugTYXe02WvQ7hrwrUE9YseHuoJaYQ8D69ZT300lGbF33fO'
    );
    if (stripe && sessionId) {
      stripe.redirectToCheckout({ sessionId });
    }
  });
}