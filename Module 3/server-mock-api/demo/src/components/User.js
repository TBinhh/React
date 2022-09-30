import axios from "axios";
import { useEffect, useState } from "react";

export const User = () => {
    const [user, setUser] = useState();
    useEffect(() => {
        axios.get("http://localhost:3001/api/users")
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                throw err;
            });
    },[])
}