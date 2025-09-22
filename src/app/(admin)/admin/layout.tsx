// layout admin

import Navbar from "@/components/ui/navbar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ border: '5px solid red', padding: '10px' }}>
            <Navbar/>
            <h2>Admin Section</h2>
            {children}
        </div>
    );
}