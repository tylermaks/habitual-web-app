import SideNav from "@/src/components/ui/SideNav";

export default function PortalLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="bg-surface-a0 min-h-screen flex">
            <SideNav />
            <main className="p-8">
                {children}
            </main>
        </div>
    );
  }
  