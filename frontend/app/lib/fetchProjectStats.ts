// Fetch GitHub repository stats
export async function fetchGitHubStats(owner: string, repo: string) {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });

    if (!response.ok) {
      console.error(`Failed to fetch GitHub stats for ${owner}/${repo}`);
      return { stars: 0, forks: 0 };
    }

    const data = await response.json();
    return {
      stars: data.stargazers_count || 0,
      forks: data.forks_count || 0,
    };
  } catch (error) {
    console.error(`Error fetching GitHub stats for ${owner}/${repo}:`, error);
    return { stars: 0, forks: 0 };
  }
}

// Fetch npm package download stats
export async function fetchNpmDownloads(packageName: string) {
  try {
    // Get last month's download count
    const response = await fetch(
      `https://api.npmjs.org/downloads/point/last-month/${packageName}`,
      {
        next: { revalidate: 3600 } // Revalidate every hour
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch npm stats for ${packageName}`);
      return '0';
    }

    const data = await response.json();
    const downloads = data.downloads || 0;

    // Format downloads
    if (downloads >= 1000) {
      return `${(downloads / 1000).toFixed(1)}K+`;
    }
    return downloads.toString();
  } catch (error) {
    console.error(`Error fetching npm stats for ${packageName}:`, error);
    return '0';
  }
}

// Fetch all npm total downloads (all-time)
export async function fetchNpmTotalDownloads(packageName: string) {
  try {
    // Use a stable date calculation to avoid hydration mismatches
    // Calculate today's date at build/request time consistently
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;

    // Get package metadata which includes total downloads
    const statsResponse = await fetch(
      `https://api.npmjs.org/downloads/range/2020-01-01:${dateString}/${packageName}`,
      {
        next: { revalidate: 3600 }
      }
    );

    if (!statsResponse.ok) {
      return '0';
    }

    const statsData = await statsResponse.json();
    const totalDownloads = statsData.downloads?.reduce((sum: number, day: { downloads: number }) => sum + day.downloads, 0) || 0;

    // Format downloads
    if (totalDownloads >= 1000) {
      return `${(totalDownloads / 1000).toFixed(1)}K+`;
    }
    return totalDownloads.toString();
  } catch (error) {
    console.error(`Error fetching npm total downloads for ${packageName}:`, error);
    return '0';
  }
}

// Fetch stats for all Nexoral projects
export async function fetchAllProjectStats() {
  const projects = [
    { repo: 'AxioDB', npm: 'axiodb' },
    { repo: 'NexoralDNS', npm: null },
    { repo: 'ContainDB', npm: null },
    { repo: 'react-caches', npm: 'react-caches' },
    { repo: 'outers', npm: 'outers' },
    { repo: 'uniquegen', npm: 'uniquegen' },
    { repo: 'xpack', npm: null },
  ];

  const statsPromises = projects.map(async (project) => {
    const githubStats = await fetchGitHubStats('nexoral', project.repo);
    let downloads = undefined;

    if (project.npm) {
      downloads = await fetchNpmTotalDownloads(project.npm);
    }

    return {
      id: project.repo.toLowerCase(),
      ...githubStats,
      downloads,
    };
  });

  const stats = await Promise.all(statsPromises);

  // Calculate totals
  const totalStars = stats.reduce((sum, stat) => sum + stat.stars, 0);
  const totalForks = stats.reduce((sum, stat) => sum + stat.forks, 0);

  // Calculate total downloads
  let totalDownloadsNum = 0;
  stats.forEach(stat => {
    if (stat.downloads) {
      const downloadStr = stat.downloads.replace(/[K+]/g, '');
      const downloadNum = parseFloat(downloadStr);
      totalDownloadsNum += downloadStr.includes('K') ? downloadNum * 1000 : downloadNum;
    }
  });

  const totalDownloads = totalDownloadsNum >= 1000
    ? `${(totalDownloadsNum / 1000).toFixed(1)}K+`
    : totalDownloadsNum.toString();

  return {
    totals: {
      totalProjects: projects.length,
      totalStars,
      totalForks,
      totalDownloads,
    },
    projectStats: stats,
  };
}
