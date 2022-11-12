import React, { useCallback, useEffect, useState } from 'react';
// eslint-disable-next-line
import { Octokit, App } from 'octokit';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const getGithubData = async () => {
  const octokit = new Octokit();

  const resp = await octokit.request('GET /search/issues?q=author:Mo-Fatah+-org:Mo-Fatah', {
    per_page: 100,
  });

  return resp.data.items;
};

// eslint-disable-next-line
const BlinkingComponent = ({ highlighting, phrase }) => (
  <p className={`blinkState${highlighting ? ' highlight' : ''}`}>{phrase}</p>
);

const OpenSource = () => {
  const [data, setResponseData] = useState([]);
  const [highlight, setHighLight] = useState(false);

  setTimeout(() => {
    setHighLight(!highlight);
  }, 1500);
  const fetchData = useCallback(async () => {
    const res = await getGithubData();
    setResponseData(res);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Main
      title="About"
      description="Learn about Mohamed Abdelfatah"
    >
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/open-source">Open Source Contributions</Link></h2>
            <BlinkingComponent highlighting={highlight} phrase=" ● A live track of my Open Source Contributions" />
          </div>
        </header>
        <ul>
          {data.filter((item) => !item.pull_request)
            .map((item) => (<li>{item.html_url}</li>))}
        </ul>
      </article>
    </Main>
  );
};

export default OpenSource;
