import GiftCourse from "../components/checkout/GiftCourse";
import CheckoutForm from "../components/checkout/checkoutForm";

function CheckoutPage({ isGift = true }) {
  return (
    <>
      {/* {isGift && <GiftCourse />} */}

      <CheckoutForm isGift={isGift} />
    </>
  );
}

export default CheckoutPage;
