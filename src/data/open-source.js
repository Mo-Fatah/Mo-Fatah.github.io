import { Octokit } from 'octokit';

const query = 'GET /search/issues?q=author:Mo-Fatah+-org:Mo-Fatah';

const filterAndMapData = (data) => (
  data.map((item) => {
    const splitted = item.repository_url.split('/');
    const repoName = splitted[splitted.length - 1];
    const repoUrl = item.repository_url.replace('api.', '').replace('repos/', '');
    if (item.pull_request) {
      return {
        type: 'pr',
        url: item.html_url,
        title: item.title,
        repo: repoName,
        repo_url: repoUrl,
      };
    }
    return {
      type: 'issue',
      url: item.html_url,
      title: item.title,
      repo: repoName,
      repo_url: repoUrl,
    };
  })
);

const getGithubData = async () => {
  const octokit = new Octokit();

  const resp = await octokit.request(query, {
    per_page: 100,
  });

  return filterAndMapData(resp.data.items);
};

export default getGithubData;
