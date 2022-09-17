export default function Students() {
const StudentInfo  = [
    {
        id: '1',
        name: 'Nguyễn Văn A',
        age: '30',
        address:'Hà Nội'
    },
    {
        id: '2',
        name: 'Nguyễn Hữu B',
        age: '37',
        address:'Huế'
    } ]
    return (
        <div className="container pt-3">
            <h1>Students</h1>
            <table className="table table-striped table-hover">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
                <tbody>
                    {StudentInfo.map((student, index) => (
                        <tr key={index}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
