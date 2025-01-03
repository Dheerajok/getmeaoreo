import {loadStripe} from "@stripe/stripe-js"

export async function checkout({lineItems}) {
    let stripePromise =null
    const getstripe =()=>{
        if(!stripePromise){
            stripePromise =loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
        }
        return stripePromise
    }
    const stripe =await getstripe()
    await stripe.redirectToCheckout({
        mode:"payment",
        lineItems,
        successUrl: window.location.href,
		cancelUrl: window.location.href
    })



}


//?session_id={CHECKOUT_SESSION_ID}