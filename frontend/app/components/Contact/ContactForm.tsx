/* eslint-disable @typescript-eslint/no-unused-vars */
export default function ContactForm() {
  // This would typically be handled by a server action in Next.js
  // But we're keeping it server-side rendered for now
  async function handleSubmit(_: FormData) {
    'use server';
    // Server-side form handling would go here
  }

  return (
    <div className="w-full max-w-2xl">
      <div className="backdrop-blur-sm bg-gray-900/70 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full animate-pulse animation-delay-1000"></div>

        <h2 className="text-2xl font-bold mb-6 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 animate-text-gradient">
            Send Me a Message
          </span>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mt-2 rounded animate-progress"></div>
        </h2>

        <form action={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                placeholder=" "
                required
                className="w-full bg-gray-800/70 border border-gray-700 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none peer transition-all duration-300"
              />
              <label
                htmlFor="name"
                className="absolute left-4 -top-3 bg-gray-900 text-xs px-2 text-gray-400 peer-focus:text-blue-500 transition-all duration-300"
              >
                Your Name
              </label>
              <div className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-600 peer-focus:w-full transition-all duration-500"></div>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                placeholder=" "
                required
                className="w-full bg-gray-800/70 border border-gray-700 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none peer transition-all duration-300"
              />
              <label
                htmlFor="email"
                className="absolute left-4 -top-3 bg-gray-900 text-xs px-2 text-gray-400 peer-focus:text-blue-500 transition-all duration-300"
              >
                Your Email
              </label>
              <div className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-600 peer-focus:w-full transition-all duration-500"></div>
            </div>

            <div className="relative">
              <textarea
                name="message"
                id="message"
                rows={5}
                placeholder=" "
                required
                className="w-full bg-gray-800/70 border border-gray-700 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none peer transition-all duration-300"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 -top-3 bg-gray-900 text-xs px-2 text-gray-400 peer-focus:text-blue-500 transition-all duration-300"
              >
                Your Message
              </label>
              <div className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-600 peer-focus:w-full transition-all duration-500"></div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center">
              <span>Send Message</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <div className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
          </button>
        </form>
      </div>
    </div>
  );
}
