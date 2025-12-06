import { Metadata } from 'next';
import ProjectsHero from '../components/Projects/ProjectsHero';
import ProjectsGrid from '../components/Projects/ProjectsGrid';
import ProjectsStats from '../components/Projects/ProjectsStats';
import { fetchAllProjectStats } from '../lib/fetchProjectStats';

export const metadata: Metadata = {
  title: 'Showcase - My Projects | AnkanHub',
  description: 'Explore my open-source projects including AxioDB, NexoralDNS, ContainDB, and more. Full-stack development, databases, DevOps tools, and infrastructure solutions.',
};

// Revalidate this page every hour
export const revalidate = 3600;

// Project data based on GitHub repositories
const fetchProjectsData = async () => {
  // Fetch real-time stats from GitHub and npm
  const realTimeStats = await fetchAllProjectStats();

  // Find stats for specific projects
  const getProjectStats = (projectId: string) => {
    const stats = realTimeStats.projectStats.find(s => s.id === projectId);
    return stats || { stars: 0, forks: 0, downloads: undefined };
  };

  return {
    stats: realTimeStats.totals,
    projects: [
      {
        id: 'axiodb',
        name: 'AxioDB',
        tagline: 'Fast, Lightweight NoSQL Database',
        description: 'A high-performance embedded NoSQL database management system built with TypeScript and Node.js. Features hash indexing for lightning-fast lookups, binary serialization for efficient storage, and AES-256 encryption for data security. Designed for modern applications requiring embedded database solutions.',
        longDescription: 'AxioDB is a production-ready embedded NoSQL database that provides developers with a simple yet powerful solution for data persistence. With over 1,950+ npm downloads, it has proven its reliability in real-world applications. The database implements advanced features like nested tree structures for complex data relationships, custom query language for flexible data retrieval, and automatic data compression to minimize storage footprint.',
        github: 'https://github.com/nexoral/AxioDB',
        demo: 'https://www.npmjs.com/package/axiodb',
        image: '/projects/axiodb.png',
        technologies: ['TypeScript', 'Node.js', 'Binary Serialization', 'AES-256', 'Hash Indexing'],
        category: 'Database',
        featured: true,
        stats: getProjectStats('axiodb'),
        highlights: [
          'Hash indexing for O(1) lookups',
          'Binary serialization for 40% storage reduction',
          'AES-256 encryption for data security',
          'Nested tree structures for complex data',
          '1,950+ npm downloads',
        ],
        color: 'blue',
      },
      {
        id: 'nexoraldns',
        name: 'NexoralDNS',
        tagline: 'High-Performance DNS Server',
        description: 'A production-grade RFC 1035 compliant DNS server built with JavaScript and Docker. Implements custom UDP protocol parsing, Redis caching layer for sub-millisecond query responses, and MongoDB delta synchronization for reliable data persistence. Handles 7,000+ queries per second while managing 400,000+ DNS records.',
        longDescription: 'NexoralDNS revolutionizes DNS management for office LANs and small to medium-sized networks. Built from scratch with pure JavaScript, it demonstrates deep understanding of network protocols and distributed systems. The server implements a sophisticated caching strategy using Redis, which dramatically reduces query latency and database load. MongoDB provides persistent storage with delta synchronization ensuring data consistency across restarts.',
        github: 'https://github.com/nexoral/NexoralDNS',
        demo: null,
        image: '/projects/nexoraldns.png',
        technologies: ['JavaScript', 'Docker', 'Redis', 'MongoDB', 'UDP Protocol', 'DNS RFC 1035'],
        category: 'Infrastructure',
        featured: true,
        stats: {
          ...getProjectStats('nexoraldns'),
          qps: '7,000+',
          records: '400,000+',
        },
        highlights: [
          'RFC 1035 compliant DNS protocol implementation',
          'Custom UDP packet parsing and serialization',
          '7,000+ queries per second throughput',
          'Redis caching for sub-ms response times',
          'MongoDB delta sync for data persistence',
          'Docker containerization for easy deployment',
        ],
        color: 'purple',
      },
      {
        id: 'containdb',
        name: 'ContainDB',
        tagline: 'Database Container Management CLI',
        description: 'A powerful Golang CLI tool that revolutionizes database deployment with one-command setup for MongoDB, PostgreSQL, and Redis. Automated backup systems with customizable schedules, container health monitoring with auto-recovery, and comprehensive database management utilities. Simplifies Docker-based database deployments.',
        longDescription: 'ContainDB simplifies DevOps workflows by abstracting away the complexity of containerized database deployments. Written in Go for maximum performance and portability, it provides a unified interface for managing multiple database systems through Docker. The tool includes intelligent backup strategies, automated health checks, and recovery mechanisms that ensure your databases are always available and protected.',
        github: 'https://github.com/nexoral/ContainDB',
        demo: null,
        image: '/projects/containdb.png',
        technologies: ['Golang', 'Docker', 'CLI', 'MongoDB', 'PostgreSQL', 'Redis', 'Shell Scripting'],
        category: 'DevOps',
        featured: true,
        stats: getProjectStats('containdb'),
        highlights: [
          'One-command database deployment in Docker',
          'Automated backup with scheduling',
          'Container health monitoring',
          'Support for MongoDB, PostgreSQL, Redis',
          'Auto-recovery mechanisms',
          'CLI-based management interface',
        ],
        color: 'green',
      },
      {
        id: 'react-caches',
        name: 'react-caches',
        tagline: 'React Local Storage Management',
        description: 'A lightweight TypeScript package that simplifies local storage management in React applications. Provides a clean, type-safe API for caching data in browser storage with automatic serialization/deserialization, expiration handling, and React hooks integration.',
        longDescription: 'react-caches eliminates the boilerplate code associated with browser storage management in React applications. It offers a declarative API that feels natural to React developers, with built-in TypeScript support for type safety. The package handles edge cases like storage quotas, JSON serialization errors, and provides a consistent interface across different storage mechanisms.',
        github: 'https://github.com/nexoral/react-caches',
        demo: 'https://www.npmjs.com/package/react-caches',
        image: '/projects/react-caches.png',
        technologies: ['TypeScript', 'React', 'Local Storage', 'Hooks'],
        category: 'Frontend Library',
        featured: false,
        stats: getProjectStats('react-caches'),
        highlights: [
          'Type-safe local storage API',
          'React hooks integration',
          'Automatic serialization',
          'Storage quota handling',
          'Expiration support',
        ],
        color: 'cyan',
      },
      {
        id: 'outers',
        name: 'outers',
        tagline: 'Node.js Utilities Package',
        description: 'A vibrant npm package providing essential utilities for Node.js applications including message encryption with AES-256, terminal text coloring for better CLI UX, and various string manipulation helpers. Perfect for building secure command-line tools and utilities.',
        longDescription: 'outers brings together commonly needed utilities in a single, well-tested package. The encryption module uses industry-standard AES-256 algorithm for securing sensitive data, while the terminal coloring utilities make CLI applications more user-friendly and visually appealing. Additional features include string formatting, validation helpers, and encoding utilities.',
        github: 'https://github.com/nexoral/outers',
        demo: 'https://www.npmjs.com/package/outers',
        image: '/projects/outers.png',
        technologies: ['TypeScript', 'Node.js', 'Encryption', 'CLI'],
        category: 'Utility Library',
        featured: false,
        stats: getProjectStats('outers'),
        highlights: [
          'AES-256 message encryption',
          'Terminal text coloring',
          'String manipulation utilities',
          'TypeScript support',
          'Zero dependencies',
        ],
        color: 'amber',
      },
      {
        id: 'uniquegen',
        name: 'uniquegen',
        tagline: 'Random Data Generator',
        description: 'An open-source TypeScript package for Node.js enabling generation of unique identifiers, random numbers, and words. Useful for testing, mock data generation, and creating unique resource identifiers. Features MongoDB ObjectID generation and customizable random string generation.',
        longDescription: 'uniquegen provides cryptographically secure random data generation for various use cases. Whether you need UUIDs for database records, random test data, or unique identifiers for distributed systems, this package delivers with a clean, intuitive API. The MongoDB ObjectID generator ensures compatibility with existing MongoDB-based applications.',
        github: 'https://github.com/nexoral/uniquegen',
        demo: 'https://www.npmjs.com/package/uniquegen',
        image: '/projects/uniquegen.png',
        technologies: ['TypeScript', 'Node.js', 'UUID', 'Cryptography'],
        category: 'Utility Library',
        featured: false,
        stats: getProjectStats('uniquegen'),
        highlights: [
          'UUID v4 generation',
          'MongoDB ObjectID support',
          'Random word generation',
          'Cryptographically secure',
          'Customizable formats',
        ],
        color: 'pink',
      },
      {
        id: 'xpack',
        name: 'xpack',
        tagline: 'Universal Linux Package Builder',
        description: 'A powerful Go-based CLI tool for building universal Linux packages. Simplifies the process of creating .deb, .rpm, and other package formats from a single source. Streamlines application distribution across different Linux distributions with automated dependency resolution and package signing.',
        longDescription: 'xpack addresses the challenge of distributing Linux applications across multiple package formats. Instead of maintaining separate build scripts for different distributions, xpack provides a unified configuration and build process. It handles complex tasks like dependency mapping across package managers, architecture-specific builds, and package metadata generation automatically.',
        github: 'https://github.com/nexoral/xpack',
        demo: null,
        image: '/projects/xpack.png',
        technologies: ['Go', 'Linux', 'CLI', 'Package Management', 'Shell Scripting'],
        category: 'DevOps',
        featured: false,
        stats: getProjectStats('xpack'),
        highlights: [
          'Universal package builder',
          'Multi-format support (.deb, .rpm)',
          'Automated dependency resolution',
          'Cross-distribution compatibility',
          'Package signing support',
        ],
        color: 'indigo',
      },
    ],
  };
};

export default async function ProjectsPage() {
  const data = await fetchProjectsData();

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Hero Section */}
          <ProjectsHero />

          {/* Stats Section */}
          <ProjectsStats stats={data.stats} />

          {/* Projects Grid */}
          <ProjectsGrid projects={data.projects} />
        </div>
      </div>
    </div>
  );
}
