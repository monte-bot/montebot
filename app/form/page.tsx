import { redirect } from "next/navigation";
import { getAuthSession } from "../components/auth/config";
import DashboardLayout from "../components/dashboard-layout";
import StudentTable from "./submit-form";

export default async function Dashboard() {
    const session = await getAuthSession();

    if (!session) {
        redirect("/unauthorized");
    }

    return (
        <DashboardLayout>
            <div className="flex flex-col gap-5 w-full p-10">
                <StudentTable />
            </div>
        </DashboardLayout>
    );
}