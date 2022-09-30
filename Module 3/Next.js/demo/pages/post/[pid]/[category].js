import { useRouter } from "next/router";
export default function CategoryID() {
    const router = useRouter();
    const { pid, CategoryID } = router.query;
    return(
        <div>
        <h1>PID: {pid}</h1>
        <p>CateID: {CategoryID}</p>
        </div>
    )
}