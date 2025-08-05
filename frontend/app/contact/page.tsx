import { Metadata } from 'next';
import SocialMediaGrid from '../components/Contact/SocialMediaGrid';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import AnimatedBackground from '../components/Contact/AnimatedBackground';

export const metadata: Metadata = {
  title: 'Contact Me - AnkanHub',
  description: 'Get in touch with Ankan Saha. Connect through social media or send a direct message.',
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white pt-32 pb-20 px-6">
      {/* Animated background */}
      <AnimatedBackground />

      <div className="relative z-20 container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 animate-text-gradient">
              Let&apos;s Connect
            </span>
            <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform animate-progress"></div>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I&apos;m always interested in new opportunities, collaborations, or just having a chat about technology.
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="mb-24">
          <h2 className="text-2xl font-bold mb-10 text-center">
            <span className="border-b-2 border-blue-500 pb-2">Social Connections</span>
          </h2>
          <SocialMediaGrid />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-20">
          <ContactForm />
          <ContactInfo />
        </div>

        <div className="text-center mt-20">
          <div className="inline-block px-6 py-3 border border-gray-700 rounded-full bg-gray-800/50 text-gray-400 animate-pulse">
            Currently open to new opportunities
          </div>
        </div>
      </div>

      {/* SVG decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute -bottom-10 w-full">
          <path
            fill="rgba(30, 41, 59, 0.4)"
            fillOpacity="1"
            d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,186.7C672,192,768,160,864,165.3C960,171,1056,213,1152,208C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
