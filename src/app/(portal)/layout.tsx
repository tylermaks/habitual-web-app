import SideNav from "@/src/components/dashboard/SideNav/SideNav";
import TopNav from "@/src/components/dashboard/TopNav";

export default function PortalLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="min-h-screen w-full bg-gray-100">
            <TopNav />
            {children}
        </div>
    );
  }
  