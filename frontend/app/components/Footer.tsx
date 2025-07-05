import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-900 rounded-t-xl text-white shadow-md fixed bottom-0 left-0 right-0">
            <p className="text-sm mb-2 md:mb-0">
                &copy; {currentYear} Ankan Saha. All rights reserved.
            </p>

            <div className="flex space-x-4">
                <a href="https://github.com/ankansaha85" target="_blank" rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors">
                    <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com/in/ankansaha85" target="_blank" rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors">
                    <FaLinkedin size={20} />
                </a>
                <a href="https://twitter.com/ankansaha85" target="_blank" rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors">
                    <FaTwitter size={20} />
                </a>
                <a href="mailto:contact@ankansaha.com" target="_blank" rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors">
                    <FaEnvelope size={20} />
                </a>
            </div>
        </footer>
    )
}