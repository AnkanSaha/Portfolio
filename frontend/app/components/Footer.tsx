"use client";
import { JSX, useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    const currentYear: number = new Date().getFullYear();
    interface SocialLink {
        icon: JSX.Element;
        href: string;
    }
    
    const [socialLinks, setSocialLink] = useState<SocialLink[]>([]);

    useEffect(function (){
        setTimeout(()=> {
            setSocialLink([
                { icon: <FaGithub size={20} />, href: "https://github.com/AnkanSaha" },
                { icon: <FaLinkedin size={20} />, href: "https://linkedin.com/in/theankansaha" },
                { icon: <FaTwitter size={20} />, href: "https://twitter.com/theankansaha" },
              { icon: <FaEnvelope size={20} />, href: "connect@ankan.site" },
            ])
        }, 5000)
    })

    return (
        <footer className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-900 rounded-t-xl text-white shadow-md fixed bottom-0 left-0 right-0">
            <p className="text-sm mb-2 md:mb-0">
                &copy; {currentYear} Ankan Saha. All rights reserved.
            </p>

            <div className="flex space-x-4">
                {
                    socialLinks.map((links: SocialLink, index)=> {
                        return (
                            <a href={links.href} key={index} target="_blank" rel="noopener noreferrer"
                                className="hover:text-blue-400 transition-colors">
                                {links.icon}
                            </a>
                        )
                    })
                }
            </div>
        </footer>
    )

}