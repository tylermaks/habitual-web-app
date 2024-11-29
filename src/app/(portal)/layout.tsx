import TopNav from "@/src/components/ui/TopNav";

export default function PortalLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="min-h-screen w-full bg-off-white">
            <TopNav />
            {children}
        </div>
    );
  }
  