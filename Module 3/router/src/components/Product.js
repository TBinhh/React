import { useLocation, useParams } from "react-router-dom";

function Product() {
//   let { categoryId } = useParams();
const {state } = useLocation();
  return (
    <div>
      <h3>Id selected {state.categoryId} </h3>
    </div>
  );
}
export default Product;