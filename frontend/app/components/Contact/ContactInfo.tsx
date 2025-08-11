// Define types for contact info items
export type ContactInfoItem = {
  id: string;
  title: string;
  value: string;
  icon: string;
  color: string;
};

// Contact information data that can be managed from the backend
const contactInfoItems: ContactInfoItem[] = [
  {
    id: 'email',
    title: 'Email',
    value: 'connect@ankan.site',
    icon: '/icons/email.svg',
    color: 'text-blue-500'
  },
  {
    id: 'location',
    title: 'Location',
    value: 'Kolkata, India',
    icon: '/icons/location.svg',
    color: 'text-green-500'
  },
  {
    id: 'availability',
    title: 'Availability',
    value: 'Full-time',
    icon: '/icons/clock.svg',
    color: 'text-amber-500'
  }
];

export default function ContactInfo() {
  return (
    <div className="w-full max-w-lg">
      <div className="backdrop-blur-sm bg-gray-900/70 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/5 rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/5 rounded-full"></div>

        <h2 className="text-2xl font-bold mb-8 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 animate-text-gradient">
            Contact Information
          </span>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mt-2 rounded animate-progress"></div>
        </h2>

        <div className="space-y-6">
          {contactInfoItems.map((item) => (
            <div
              key={item.id}
              className="flex items-start space-x-4 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300 transform hover:translate-x-2"
            >
              <div className={`flex-shrink-0 p-3 rounded-full bg-gray-700/50 ${item.color}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {item.id === 'email' && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  )}
                  {item.id === 'location' && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  )}
                  {item.id === 'availability' && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  )}
                </svg>
              </div>
              <div>
                <h3 className="text-gray-400 text-sm font-medium">{item.title}</h3>
                <p className="text-white text-lg font-semibold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-5 border border-gray-700 rounded-xl bg-gray-800/30">
          <h3 className="text-xl font-medium mb-2">Need a quick response?</h3>
          <p className="text-gray-400">
            I typically reply within 24 hours. For urgent inquiries, please mention
            &quot;URGENT&quot; in your subject line.
          </p>
        </div>
      </div>
    </div>
  );
}
