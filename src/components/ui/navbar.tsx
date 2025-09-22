import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <Link href="/">Home/</Link>
            <Link href="/Student">เพิ่ม Portfilo/</Link>
            <Link href="/admin">อาจารย์</Link>
        </nav>
    );
}
