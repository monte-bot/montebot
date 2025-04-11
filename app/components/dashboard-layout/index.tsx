import Sidebar from "@/components/ui/sidebar";

interface DashboardLayoutProps {    
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <div className="h-full flex">
            <Sidebar />
            <div className="flex-1 relative">                
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;