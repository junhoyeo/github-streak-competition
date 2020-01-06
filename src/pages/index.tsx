import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Layout from '../components/atoms/Layout';

import { IStreakModel } from '../utils/api/getUserStreaks';

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
  renderContributions(users, userData);
};

const renderContributions = async (
  users: string[],
  streaks: UserData,
) => {
  // const { drawContributions } = await import('github-contributions-canvas');
  users.map((username: string) => {
    const canvasElement = document.getElementById(`graph-${username}`);
    console.log(canvasElement);
    console.log(users, streaks);
    // drawContributions(
    //   canvasElement,
    //   {
    //     data: streaks[username],
    //     username: username,
    //     themeName: "standard",
    //     footerText: "Made by @sallar - github-contributions.now.sh"
    //   },
    // );
  });
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
          <Graph
            id={`graph-${username}`}
          />
        </Card>
      ))}
    </Layout>
  );
};

export default Home;

const Card = styled.div`
`;

const Graph = styled.canvas`
`;
