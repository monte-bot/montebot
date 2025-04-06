import { redirect } from "next/navigation"
import { getAuthSession } from "../components/auth/config"

export default async function Dashboard() {

    const session = await getAuthSession()

    if (!session){
        redirect('/unauthorized');
    }

        return (
            <div>Dashboard</div>
        )
}