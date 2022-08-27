function Student(props) {
    console.log(props);
    return (
       
        <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"> {props.Id}</th>
            <td>{props.Name}</td>
            <td>{props.Age}</td>
            <td>{props.Address}</td>
          </tr>
          </tbody>
</table>
    );
}
export default Student;