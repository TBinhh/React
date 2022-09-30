import { useRouter } from "next/router"

export default function StudentDetail() {
    const router = useRouter();
    const {pid} = router.query;
    return (
        <p>PID: {pid}</p>
    )
}