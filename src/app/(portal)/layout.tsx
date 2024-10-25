import SideNav from "@/src/components/ui/SideNav";
import TopNav from "@/src/components/dashboard/TopNav";

export default function PortalLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="bg-surface-a0 min-h-screen flex p-4">
            <SideNav />
            <main className="px-12 w-full">
                <TopNav />
                {children}
            </main>
        </div>
    );
  }
  