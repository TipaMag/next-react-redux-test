import Link from "next/link";
import { Layout } from "../components/Layout";

export default function ErrorPage() {
    return (
        <Layout title='404 Error'>
            <h1 style={{ textAlign: 'center', color: 'red' }}>
                Error 404
            </h1>
            <Link href='/'><a>-- go back</a></Link>
        </Layout>
    )
}