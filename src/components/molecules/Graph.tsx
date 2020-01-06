import GitHubCalendar from 'github-calendar';
import React, { useEffect } from 'react';
import styled from 'styled-components';

type GraphProps = {
  username: string;
};

export const Graph: React.FC<GraphProps> = ({ username }) => {
  const graphID = `graph-${username}`;

  useEffect(
    () => {
      GitHubCalendar(
        `#${graphID}`,
        username,
        {
          global_stats: false,
          responsive: true,
        },
      );
    },
    [username],
  );

  return (
    <Container
      id={graphID}
    />
  );
};

export default Graph;

const Container = styled.div`
  max-width: 722px;
`;
