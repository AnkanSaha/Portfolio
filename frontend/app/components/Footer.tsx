
export default function Footer() {
    return (
        <footer className="flex justify-center items-center p-4 bg-gray-900 rounded-t-xl text-white shadow-md fixed bottom-0 left-0 right-0">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Ankan Saha. All rights reserved.
            </p>
        </footer>
    )
}