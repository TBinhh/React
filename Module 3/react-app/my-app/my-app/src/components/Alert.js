function Alert(props) {
    console.log(props);
    return (
       
        <div className="alert alert-danger" role="alert">
          {props.text}
        </div>
    );
}
export default Alert;