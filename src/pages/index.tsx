import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Layout from '../components/atoms/Layout';
import Profile from '../components/atoms/Profile';
import Graph from '../components/molecules/Graph';

import { IStreakModel } from '../utils/api/getUserStreaks';

import '../styles/override.scss';

const getStreaksByUsername = async (username: string): Promise<IStreakModel> => {
  const { data } = await axios.get(`/api/${username}`);
  return data;
};

type UserData = {
  [username: string]: IStreakModel;
};

const loadStreakData = async (
  users: string[],
  callback: (streak: UserData) => void,
): Promise<void> => {
  const userData: UserData = {};
  await Promise.all(
    users.map(async (username: string) => {
      const streakData: IStreakModel = await getStreaksByUsername(username);
      userData[username] = streakData;
    }),
  );
  console.log(userData);
  callback(userData);
};

const Home: React.FC = () => {
  const [users, setUsers] = useState<string[]>(['junhoyeo']);
  const [streaks, setSteaks] = useState<UserData>();

  useEffect(
    () => {
      loadStreakData(users, setSteaks);
    },
    [users],
  );

  return (
    <Layout>
      {users.map((username: string, idx: number) => (
        <Card
          key={`user-${idx}`}
        >
          <Profile
            username={username}
          />
          {streaks ? JSON.stringify(streaks[username].streakCurrent) : ''}
          <Graph
            username={username}
          />
        </Card>
      ))}
    </Layout>
  );
};

export default Home;

const Card = styled.div`
`;
