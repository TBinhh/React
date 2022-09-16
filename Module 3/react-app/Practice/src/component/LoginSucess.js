import {userState} from "react";
export default function LoginSuccess() {
    const [username, setUsername] = useState('Admin');
    return(
        <div className="container">
            <p>Hello {username}</p>
            <button onClick={() => setUsername("Nam")}
        </div>
    )
}