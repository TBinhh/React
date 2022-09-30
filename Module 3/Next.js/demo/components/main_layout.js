import Link from "next/link";
import Blog from "../pages/Blog";
export default function MainLayout({ children }) {
    return (
        <div className="container">
            <ul>
                <li>
                    <Link href='../pages/Blog.js'> 
                        <a>Blog</a>
                    </Link>
                </li>

                <br />
                <li>
                    <Link href='./Home.js.js'>
                        <a>Home</a>
                    </Link>
                </li>
                <br />
                <li>
                    <Link href='./login.js'>
                        <a>Layout</a>

                    </Link>
                </li>
                <br />
                <div className="danger">{children} </div>
            </ul>

        </div>
    )
}