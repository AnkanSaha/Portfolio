import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/20 animate-pulse"></div>
        <div className="absolute top-3/4 left-1/3 w-48 h-48 rounded-full bg-purple-500/10 animate-ping animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-cyan-500/15 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 rounded-full bg-amber-500/10 animate-ping animation-delay-3000"></div>

        {/* Code-like background elements */}
        <div className="hidden md:block absolute top-20 left-10 text-blue-500/20 text-xs font-mono">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="animation-delay-random">
              {'{'}
              &nbsp;&nbsp;function: notFound(),
              &nbsp;&nbsp;status: 404,
              &nbsp;&nbsp;message: &quot;Building something amazing...&quot;
              {'}'}
            </div>
          ))}
        </div>
        <div className="hidden md:block absolute bottom-20 right-10 text-purple-500/20 text-xs font-mono">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="animation-delay-random">
              &lt;div className=&quot;coming-soon&quot;&gt;
              &nbsp;&nbsp;&lt;patience value=&quot;rewarded&quot; /&gt;
              &lt;/div&gt;
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-3xl w-full text-center">
        {/* Logo with animation */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 animate-pulse"></div>
            <Image
              src="/logo.png"
              alt="AnkanHub Logo"
              width={100}
              height={100}
              className="filter drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] relative z-10"
            />
          </div>
        </div>

        {/* 404 text with gradient */}
        <h1 className="text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 animate-text-gradient">
          404
        </h1>

        {/* Message */}
        <h2 className="text-3xl font-bold mb-6 text-white">Page Under Development</h2>

        <div className="bg-gray-800/60 backdrop-blur-md p-6 rounded-lg shadow-lg mb-10 max-w-xl mx-auto">
          <p className="text-gray-300 mb-4">
            We&apos;re working hard to bring you a great product. Please be patient as we craft
            an exceptional experience for you.
          </p>

          <div className="flex items-center justify-center mb-6">
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full w-4/5 animate-progress"></div>
            </div>
            <span className="ml-4 text-gray-400">80%</span>
          </div>

          <div className="flex items-center justify-center space-x-2 text-gray-400 mb-6">
            <svg className="w-5 h-5 text-amber-400 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Building awesome features...</span>
          </div>
        </div>

        {/* Return button with animation */}
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
        >
          <span className="flex items-center space-x-2">
            <span>Return Home</span>
            <svg className="w-5 h-5 ml-2 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}
