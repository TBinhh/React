import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {
    const router = useRouter();
    return (
      <div >
        <h1> This is log in form</h1>
        <form>
            <input type='text' placeholder="Enter uername">name</input>
            <input type='text' placeholder="Enter password">password</input>
        </form>
        <Link to='/'>Home</Link>
      </div>
    )
  }
  