import Image from "next/image";

export default function Header() {
return (
    <header className="flex justify-between items-center p-4 bg-gray-900 rounded-b-xl text-white shadow-md">
        <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={50} height={50} className="mr-4" />
            <h1 className="text-xl font-bold">Dev Portfolio</h1>
        </div>
        <nav>
            <ul className="flex space-x-4">
                <li><a href="/" className="text-white hover:text-blue-600 transition-colors">Home</a></li>
                <li><a href="/about" className="text-white hover:text-blue-600 transition-colors">About</a></li>
                <li><a href="/contact" className="text-white hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
        </nav>
    </header>
);
}
