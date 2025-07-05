import Image from "next/image";
import Link from "next/link";

export default function Header() {
return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-md">
        <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={50} height={50} className="mr-4" />
            <h1 className="text-xl font-bold">Dev Portfolio</h1>
        </div>
        <nav>
            <ul className="flex space-x-4">
                <li><Link href="/" className="text-white hover:text-blue-600 transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-white hover:text-blue-600 transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-white hover:text-blue-600 transition-colors">Contact</Link></li>
            </ul>
        </nav>
    </header>
);
}
