import axios from "axios";
import { useEffect, useState } from "react";

export const Post = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/posts")
            .then(res => setPosts(res.data))
            .catch(err => alert(err.mesage));
    }, []);

    return (
        <div className="container pt-3">
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )

}




