import * as React from 'react';

import Profile from '../atoms/Profile';
import {
  Text,
  TextForTitle,
} from '../atoms/Text';
import Graph from '../molecules/Graph';
import styled from 'styled-components';

type CardProps = {
  current: number;
  username: string;
};

const Card: React.FC<CardProps> = ({ current, username }) => {
  const onClickProfile = () => {
    const win = window.open(`https://github.com/${username}`);
    win?.focus();
  };

  return (
    <Container>
      <Row>
        <Profile
          username={username}
        />
        <Info>
          <Name
            onClick={onClickProfile}
          >
            {username}
          </Name>
          <Streak>
            오늘 <strong>{current}개</strong> 커밋 작성!
          </Streak>
        </Info>
      </Row>
      <Graph
        username={username}
      />
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 500px;

  @media (max-width: 500px) {
    width: 95%;
  }
`;

const Row = styled.div`
  width: inherit;
  display: flex;

  &:first-child {
    margin-bottom: 0.5rem;
  }
`;

const Info = styled.div`
  margin-left: 1rem;
`;

const Name = styled(TextForTitle)`
  margin: 0;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const Streak = styled(Text)`
  font-size: 0.9rem;

  strong {
    color: #008001;
  }
`;
