import Image from 'next/image';
import Link from 'next/link';

// Define types for social media items
export type SocialMediaItem = {
  id: string;
  name: string;
  url: string;
  icon: string;
  backgroundColor: string;
  hoverColor: string;
  textColor: string;
  description: string;
};

// Social media data that can be managed from the backend
const socialMediaItems: SocialMediaItem[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/AnkanSaha',
    icon: '/social/github.svg',
    backgroundColor: 'bg-gray-900',
    hoverColor: 'hover:bg-gray-800',
    textColor: 'text-white',
    description: 'Check out my open-source projects and contributions'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/theankansaha',
    icon: '/social/linkedin.svg',
    backgroundColor: 'bg-blue-700',
    hoverColor: 'hover:bg-blue-600',
    textColor: 'text-white',
    description: 'Connect with me professionally'
  },
  {
    id: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/theankansaha',
    icon: '/social/twitter.svg',
    backgroundColor: 'bg-sky-500',
    hoverColor: 'hover:bg-sky-400',
    textColor: 'text-white',
    description: 'Follow me for tech updates and insights'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://instagram.com/theankansaha',
    icon: '/social/instagram.svg',
    backgroundColor: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500',
    hoverColor: 'hover:opacity-90',
    textColor: 'text-white',
    description: 'See my creative side and daily adventures'
  },
  {
    id: 'reddit',
    name: 'Reddit',
    url: 'https://reddit.com/user/theankansaha',
    icon: '/social/reddit.svg',
    backgroundColor: 'bg-orange-600',
    hoverColor: 'hover:bg-orange-500',
    textColor: 'text-white',
    description: 'Join discussions and see my posts on Reddit'
  },
  {
    id: 'devto',
    name: 'Dev.to',
    url: 'https://dev.to/theankansaha',
    icon: '/social/devto.svg',
    backgroundColor: 'bg-gray-800',
    hoverColor: 'hover:bg-gray-700',
    textColor: 'text-white',
    description: 'Read my technical articles and tutorials'
  },
  {
    id: 'discord',
    name: 'Discord',
    url: 'https://discord.gg/theankansaha',
    icon: '/social/discord.svg',
    backgroundColor: 'bg-indigo-600',
    hoverColor: 'hover:bg-indigo-500',
    textColor: 'text-white',
    description: 'Chat with me on Discord'
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:ankan@ankanweb.site',
    icon: '/social/email.svg',
    backgroundColor: 'bg-green-600',
    hoverColor: 'hover:bg-green-500',
    textColor: 'text-white',
    description: 'Reach out directly: ankan@ankanweb.site'
  }
];

export default function SocialMediaGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
      {socialMediaItems.map((item) => (
        <Link
          href={item.url}
          key={item.id}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300
            ${item.backgroundColor} ${item.hoverColor} ${item.textColor}
            transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl
          `}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>

          <div className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-white/10 group-hover:bg-white/20 transition-all"></div>

          <div className="p-6 flex items-start space-x-4">
            <div className="flex-shrink-0 relative w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shadow-inner">
              <Image
                src={item.icon}
                alt={item.name}
                width={28}
                height={28}
                className="filter group-hover:brightness-110 transition-filter duration-300"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1 group-hover:underline">{item.name}</h3>
              <p className="opacity-90 text-sm">{item.description}</p>
            </div>
          </div>

          <div className="absolute w-0 h-1 bottom-0 left-0 bg-white/30 group-hover:w-full transition-all duration-500"></div>
        </Link>
      ))}
    </div>
  );
}
