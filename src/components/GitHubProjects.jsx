import { useEffect, useState } from 'react';
import { Code, Star, GitFork, Globe, Pin, ExternalLink, Eye } from 'lucide-react';

const GitHubProjects = () => {
  const [repos, setRepos] = useState([]);
  const [pinnedRepos, setPinnedRepos] = useState([]);
  const [allRepos, setAllRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);

  const username = "kishore8787";
  const token = import.meta.env.VITE_GITHUB_TOKEN;

  useEffect(() => {
    fetchGitHubData();
  }, []);

  useEffect(() => {
    if (repos.length > 0) {
      setVisibleProjects([]);
      repos.forEach((_, index) => {
        setTimeout(() => {
          setVisibleProjects(prev => [...prev, index]);
        }, index * 150);
      });
    }
  }, [repos]);

  const fetchGitHubData = async (forceRefresh = false) => {
    try {
      if (forceRefresh) setRefreshing(true);
      setLoading(true);
      setError(null);

      if (!username) throw new Error('GitHub username not configured');

      const pinnedQuery = {
        query: `
          {
            user(login: "${username}") {
              pinnedItems(first: 6, types: REPOSITORY) {
                nodes {
                  ... on Repository {
                    name
                    url
                    description
                    stargazerCount
                    forkCount
                    primaryLanguage {
                      name
                      color
                    }
                    repositoryTopics(first: 10) {
                      nodes {
                        topic {
                          name
                        }
                      }
                    }
                    homepageUrl
                    updatedAt
                    createdAt
                    isPrivate
                    isFork
                  }
                }
              }
            }
          }
        `
      };

      let pinnedRepoNames = [];
      let pinnedReposData = [];

      if (token) {
        try {
          const pinnedResponse = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(pinnedQuery)
          });

          const pinnedData = await pinnedResponse.json();
          console.log("Pinned Data:", pinnedData);

          if (pinnedData.errors) {
            console.error('GraphQL Errors:', pinnedData.errors);
            setError("Unable to fetch pinned projects");
          } else if (pinnedData.data?.user?.pinnedItems?.nodes?.length > 0) {
            pinnedReposData = pinnedData.data.user.pinnedItems.nodes.map(node => ({
              id: node.name,
              name: node.name,
              description: node.description,
              html_url: node.url,
              homepage: node.homepageUrl,
              stargazers_count: node.stargazerCount,
              forks_count: node.forkCount,
              language: node.primaryLanguage?.name,
              language_color: node.primaryLanguage?.color,
              topics: node.repositoryTopics?.nodes?.map(topic => topic.topic.name) || [],
              updated_at: node.updatedAt,
              created_at: node.createdAt,
              private: node.isPrivate,
              fork: node.isFork,
              isPinned: true
            }));
            pinnedRepoNames = pinnedReposData.map(repo => repo.name);
            setPinnedRepos(pinnedReposData);
          } else {
            console.warn("No pinned repositories found");
            setPinnedRepos([]);
          }
        } catch (graphqlError) {
          console.warn('GraphQL query failed:', graphqlError);
          setError("Failed to load pinned projects");
          setPinnedRepos([]);
        }
      }

      const headers = {
        'Accept': 'application/vnd.github.v3+json',
      };

      if (token) headers['Authorization'] = `token ${token}`;

      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=100&type=owner`,
        { headers }
      );

      if (!reposResponse.ok) throw new Error(`GitHub API error: ${reposResponse.status}`);

      const allReposData = await reposResponse.json();

      const filteredAllRepos = allReposData
        .filter(repo => !repo.fork && !repo.private && !repo.archived)
        .map(repo => ({
          ...repo,
          isPinned: pinnedRepoNames.includes(repo.name)
        }))
        .sort((a, b) => {
          if (a.isPinned && !b.isPinned) return -1;
          if (!a.isPinned && b.isPinned) return 1;
          if (b.stargazers_count !== a.stargazers_count) {
            return b.stargazers_count - a.stargazers_count;
          }
          return new Date(b.updated_at) - new Date(a.updated_at);
        });

      setAllRepos(filteredAllRepos);

      const finalPinnedRepos = pinnedReposData.length > 0
        ? pinnedReposData
        : filteredAllRepos.filter(repo => pinnedRepoNames.includes(repo.name));

      if (finalPinnedRepos.length === 0) {
        // If no pinned repos, show all repos by default
        setRepos(filteredAllRepos);
      } else {
        setRepos(showAll ? filteredAllRepos : finalPinnedRepos);
      }

    } catch (err) {
      console.error('Error fetching GitHub data:', err);
      setError(err.message);
      setPinnedRepos([]);
      setRepos([]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const toggleRepos = () => {
    const newShowAll = !showAll;
    setShowAll(newShowAll);
    setRepos(newShowAll ? allRepos : pinnedRepos);
  };

  const formatProjectName = (name) => {
    return name
      .replace(/-/g, ' ')
      .replace(/_/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#F7DF1E',
      TypeScript: '#3178C6',
      Python: '#3776AB',
      Java: '#ED8B00',
      'C++': '#00599C',
      'C#': '#239120',
      PHP: '#777BB4',
      Ruby: '#CC342D',
      Go: '#00ADD8',
      Rust: '#000000',
      Swift: '#FA7343',
      Kotlin: '#7F52FF',
      Dart: '#0175C2',
      HTML: '#E34F26',
      CSS: '#1572B6',
      SCSS: '#CF649A',
      Vue: '#4FC08D',
      React: '#61DAFB',
    };
    return colors[language] || '#6B7280';
  };

  if (loading && repos.length === 0) {
    return (
      <div className="mt-12 sm:mt-16 md:mt-20 w-full">
        <h2 className="text-white font-bold text-center mb-8" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
          My Projects
        </h2>
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-300"></div>
          <p className="text-white/60 text-sm">Loading projects from GitHub...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12 sm:mt-16 md:mt-20 w-full">
      {/* Header and toggle */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <h2 className="text-white font-bold text-center" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            <Code className="inline-block w-8 h-8 sm:w-12 sm:h-12 mr-2 sm:mr-4 text-cyan-300" />
            My Projects
          </h2>
        </div>

        <button
          onClick={toggleRepos}
          className={`
            flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium
            transition-all duration-300 text-sm sm:text-base
            ${showAll
              ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 hover:bg-yellow-500/30'
              : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30'
            }
          `}
        >
          {showAll ? (
            <>
              <Pin className="w-4 h-4" />
              <span className="hidden sm:inline">Show Pinned Only</span>
              <span className="sm:hidden">Pinned</span>
            </>
          ) : (
            <>
              <Eye className="w-4 h-4" />
              <span className="hidden sm:inline">Show All Repositories</span>
              <span className="sm:hidden">All Repos</span>
            </>
          )}
          <span className="ml-1 px-2 py-0.5 rounded-full bg-white/20 text-xs font-bold">
            {showAll ? allRepos.length : pinnedRepos.length}
          </span>
        </button>
      </div>

      <div className="w-24 h-1 bg-gradient-to-r from-cyan-300 to-blue-500 mx-auto mb-12 rounded-full"></div>

      {error && (
        <div className="text-center mb-8">
          <p className="text-red-400 mb-4">{error}</p>
          <button
            onClick={() => fetchGitHubData(true)}
            className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg text-red-300 transition-colors text-sm font-medium"
          >
            Try Again
          </button>
        </div>
      )}

      {repos.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {repos.map((repo, index) => {
            const isVisible = visibleProjects.includes(index);
            const isHovered = hoveredProject === index;

            return (
              <div
                key={repo.id}
                className={`
                  group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 
                  hover:bg-white/20 hover:border-white/30 hover:shadow-2xl hover:shadow-cyan-500/20
                  transform hover:-translate-y-2 transition-all duration-500 ease-out
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                  min-h-[320px] flex flex-col
                `}
                style={{
                  transitionDelay: isVisible ? '0ms' : `${index * 150}ms`
                }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {repo.isPinned && (
                  <div className="absolute top-4 right-4">
                    <Pin className="w-5 h-5 text-yellow-400 animate-pulse" />
                  </div>
                )}

                <div className="flex items-start justify-between mb-3 pr-8">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex-1">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-300 transition-colors line-clamp-2"
                    >
                      {formatProjectName(repo.name)}
                    </a>
                  </h3>
                  {repo.homepage && (
                    <a
                      href={repo.homepage.startsWith('http') ? repo.homepage : `https://${repo.homepage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-cyan-300 transition-all duration-300 hover:scale-110 flex-shrink-0 ml-2"
                      title="Live Demo"
                    >
                      <Globe className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <p className="text-white/80 text-sm mb-4 line-clamp-3 flex-1">
                  {repo.description || 'No description provided'}
                </p>

                {repo.language && (
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: repo.language_color || getLanguageColor(repo.language) }}
                    />
                    <span className="text-white/70 text-sm font-medium">{repo.language}</span>
                  </div>
                )}

                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {repo.topics.slice(0, 4).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-0.5 text-xs rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                      >
                        {topic}
                      </span>
                    ))}
                    {repo.topics.length > 4 && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-white/10 text-white/60">
                        +{repo.topics.length - 4}
                      </span>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between text-sm text-white/60 mb-4 mt-auto">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {repo.forks_count}
                    </span>
                  </div>
                  <span className="text-xs">
                    {formatDate(repo.updated_at)}
                  </span>
                </div>

                <div className="flex gap-3">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white text-sm font-medium flex-1 justify-center"
                  >
                    <Code className="w-4 h-4" />
                    Code
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage.startsWith('http') ? repo.homepage : `https://${repo.homepage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-lg transition-colors text-cyan-300 text-sm font-medium flex-1 justify-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}
                </div>

                <div className={`
                  absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none
                  ${isHovered ? 'opacity-10' : 'opacity-0'}
                  bg-gradient-to-br from-cyan-400 to-blue-600
                `} />

                {isHovered && (
                  <>
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-ping"
                        style={{
                          top: `${20 + Math.random() * 60}%`,
                          left: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 200}ms`,
                          animationDuration: '1.5s'
                        }}
                      />
                    ))}
                  </>
                )}
              </div>
            );
          })}
        </div>
      )}

      {refreshing && (
        <div className="text-center mt-6">
          <p className="text-cyan-300 text-sm">Refreshing projects...</p>
        </div>
      )}

      {!loading && !error && repos.length === 0 && (
        <div className="text-center text-white/60">
          <p className="mb-4">No projects found</p>
          <button
            onClick={() => fetchGitHubData(true)}
            className="px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-lg text-cyan-300 transition-colors"
          >
            Refresh
          </button>
        </div>
      )}
    </div>
  );
};

export default GitHubProjects;
