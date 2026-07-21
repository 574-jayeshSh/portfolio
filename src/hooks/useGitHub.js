import { useState, useEffect } from 'react';

const GITHUB_USER = '574-jayeshSh';

export function useGitHubProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cached = sessionStorage.getItem('gh_profile');
    if (cached) {
      setProfile(JSON.parse(cached));
      setLoading(false);
      return;
    }
    fetch(`https://api.github.com/users/${GITHUB_USER}`)
      .then(r => r.json())
      .then(data => {
        setProfile(data);
        sessionStorage.setItem('gh_profile', JSON.stringify(data));
        setLoading(false);
      })
      .catch(err => { setError(err); setLoading(false); });
  }, []);

  return { profile, loading, error };
}

export function useGitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cached = sessionStorage.getItem('gh_repos');
    if (cached) {
      setRepos(JSON.parse(cached));
      setLoading(false);
      return;
    }
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=15`)
      .then(r => r.json())
      .then(data => {
        setRepos(data);
        sessionStorage.setItem('gh_repos', JSON.stringify(data));
        setLoading(false);
      })
      .catch(err => { setError(err); setLoading(false); });
  }, []);

  return { repos, loading, error };
}

export function useGitHubEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = sessionStorage.getItem('gh_events');
    if (cached) {
      setEvents(JSON.parse(cached));
      setLoading(false);
      return;
    }
    fetch(`https://api.github.com/users/${GITHUB_USER}/events/public?per_page=10`)
      .then(r => r.json())
      .then(data => {
        setEvents(Array.isArray(data) ? data : []);
        sessionStorage.setItem('gh_events', JSON.stringify(data));
        setLoading(false);
      })
      .catch(() => { setLoading(false); });
  }, []);

  return { events, loading };
}

export function getLanguageColor(lang) {
  const colors = {
    'JavaScript': '#f1e05a', 'TypeScript': '#3178c6', 'C++': '#f34b7d',
    'C': '#555555', 'Python': '#3572A5', 'HTML': '#e34c26',
    'CSS': '#563d7c', 'Java': '#b07219', 'Shell': '#89e051',
  };
  return colors[lang] || '#6e7681';
}
