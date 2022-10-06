import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe('pk_test_51LmliCFi3LnWynYNKLc8XxVnAlTB6eb7TNTUdLD5k25BZU9OMdmZedto9f5MM2NZrMFplMQPp14qPVD1sCBUerjl007i1mYikA');
    }
    return stripePromise;
}

export default getStripe;