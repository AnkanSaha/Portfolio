import Image from 'next/image';

// Define types for hero section data
export type HeroData = {
  name: string;
  title: string;
  tagline: string;
  profileImage: string;
  backgroundHighlight: string;
};

// Default data (will be replaced with API data)
const defaultHeroData: HeroData = {
  name: "Ankan Saha",
  title: "Full-Stack Developer",
  tagline: "Building innovative web solutions with modern technologies",
  profileImage: "/Myself.png",
  backgroundHighlight: "Software Engineer with a passion for creating elegant, efficient, and user-friendly applications"
};

export default function HeroSection({ data = defaultHeroData }: { data?: HeroData }) {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <div className="max-w-xl">
            <h2 className="text-2xl text-blue-400 font-medium mb-3 animate-fadeInUp">
              Hello, I&apos;m
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 animate-text-gradient">
                {data.name}
              </span>
              <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform animate-progress"></div>
            </h1>
            <h3 className="text-2xl md:text-3xl text-white font-semibold mb-4 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
              {data.title}
            </h3>
            <p className="text-xl text-gray-300 mb-8 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
              {data.tagline}
            </p>

            <div className="relative animate-fadeInUp" style={{ animationDelay: '600ms' }}>
              <div className="bg-gray-800/60 backdrop-blur-md p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-300 italic relative">
                  <span className="absolute -left-4 -top-4 text-4xl text-blue-500/30">&ldquo;</span>
                  {data.backgroundHighlight}
                  <span className="absolute -right-4 -bottom-4 text-4xl text-blue-500/30">&rdquo;</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-blue-500/30 p-2">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src={data.profileImage}
                  alt={data.name}
                  fill
                  sizes="(max-width: 768px) 256px, (max-width: 1200px) 320px, 384px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Orbit effect */}
            <div className="absolute inset-0 border-4 border-dashed border-blue-500/20 rounded-full animate-spin-slow"></div>

            {/* Tech dots */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full glow-blue"></div>
            <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-8 h-8 bg-purple-500 rounded-full glow-purple"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full glow-green"></div>
            <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-8 h-8 bg-amber-500 rounded-full glow-amber"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
