import { useNavigate } from "react-router-dom";

function Category() {
    let navigate = useNavigate();
    const sendData = e => {
        navigate("/product/", { state : {categoryId: e.target.value}});
    };
    return (
        <>
        <h2>Select a Category:</h2>
        <select defaultValue="default" onChange={e => sendData(e)}>
        <option value="default" disabled hidden>
          Choose your car
        </option>
        <option value="1">Honda</option>
        <option value="2">Suzuki</option>
        <option value="3">Yamaha</option>
      </select>
        </>
    );
}
export default Category;