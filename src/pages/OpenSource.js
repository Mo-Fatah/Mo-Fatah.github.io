import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import getGithubData from '../data/open-source';
import CategoryButton from '../components/Resume/Skills/CategoryButton';

// eslint-disable-next-line
const BlinkingComponent = ({ highlighting, phrase }) => (
  <p className={`blinkState${highlighting ? ' highlight' : ''}`}>{phrase}</p>
);

const OpenSource = () => {
  const [data, setResponseData] = useState(null);
  const [highlight, setHighLight] = useState(false);
  const [dataToView, setDataToView] = useState(data);

  setTimeout(() => {
    setHighLight(!highlight);
  }, 1000);

  const fetchData = useCallback(async () => {
    const res = await getGithubData();
    setResponseData(res);
    setDataToView(res);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleClick = (label) => {
    if (label === 'all') {
      setDataToView(data);
    } else {
      setDataToView(data.filter((item) => item.type === label));
    }
  };

  return (
    <Main
      title="About"
      description="Learn about Mohamed Abdelfatah"
    >
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/open-source">Open Source Contributions</Link></h2>
            <BlinkingComponent highlighting={highlight} phrase=" ● A live track of my Open Source Contributions Through Github API" />
          </div>
        </header>
        <div className="skill-button-container">
          <CategoryButton handleClick={() => handleClick('all')} active={[]} label="All" />
          <CategoryButton handleClick={() => handleClick('pr')} active={[]} label="Pull Requests" />
          <CategoryButton handleClick={() => handleClick('issue')} active={[]} label="issues" />
        </div>
        <ul>
          {dataToView ? dataToView.map((item) => (
            <li>
              <a href={item.repo_url}><b>{item.repo}</b></a> :
              <a href={item.url}> {item.title} </a>
            </li>
          ))
            : <p><b>loading ...</b></p>}

        </ul>
      </article>
    </Main>
  );
};

export default OpenSource;
