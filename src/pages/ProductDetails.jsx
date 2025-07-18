import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  return <h2>شما محصول شماره {id} را انتخاب کردید</h2>;
}

export default ProductDetails;
