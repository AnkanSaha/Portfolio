"use client";

export default function AnimatedBackground() {
  // Generate random delay values for animation
  const codeSnippets = {
    left: Array.from({ length: 6 }).map((_, i) => ({
      id: `left-${i}`,
      delay: Math.floor(Math.random() * 10) * 100,
    })),
    right: Array.from({ length: 6 }).map((_, i) => ({
      id: `right-${i}`,
      delay: Math.floor(Math.random() * 10) * 100,
    })),
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-gray-900/30 to-gray-900/80 z-10"></div>

      {/* Floating shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-purple-500/5 rounded-full animate-float animation-delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-green-500/5 rounded-full animate-float animation-delay-2000"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5"></div>

      {/* Code-like background elements */}
      <div className="hidden lg:block absolute top-20 right-10 text-blue-500/10 text-xs font-mono">
        {codeSnippets.right.map((snippet) => (
          <div
            key={snippet.id}
            className="animation-delay-random"
            style={{ '--random': snippet.delay / 100 } as React.CSSProperties}
          >
            const connect = async () =&gt; {'{'}
            &nbsp;&nbsp;try {'{'}
            &nbsp;&nbsp;&nbsp;&nbsp;await sendMessage();
            &nbsp;&nbsp;{'}'} catch (error) {'{'}
            &nbsp;&nbsp;&nbsp;&nbsp;console.error(error);
            &nbsp;&nbsp;{'}'}
            {'}'};
          </div>
        ))}
      </div>
      <div className="hidden lg:block absolute bottom-20 left-10 text-purple-500/10 text-xs font-mono">
        {codeSnippets.left.map((snippet) => (
          <div
            key={snippet.id}
            className="animation-delay-random"
            style={{ '--random': snippet.delay / 100 } as React.CSSProperties}
          >
            function Contact() {'{'}
            &nbsp;&nbsp;return (
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Get in touch
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            &nbsp;&nbsp;);
            {'}'}
          </div>
        ))}
      </div>
    </div>
  );
}