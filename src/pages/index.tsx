import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Layout from '../components/atoms/Layout';
import Card from '../components/organisms/Card';
import Header from '../components/templates/Header';

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
  const [users, setUsers] = useState<string[]>(['junhoyeo', 'MinSeungHyun', 'suhdonghwi', 'uhmtoto']);
  const [streaks, setSteaks] = useState<UserData>();

  useEffect(
    () => {
      loadStreakData(users, setSteaks);
    },
    [users],
  );

  return (
    <Layout>
      <Header />
      {users.map((username: string, idx: number) => {
        // const current = streaks?.[username]?.streakCurrent || 0;
        const today = streaks?.[username]?.contributions[0]?.count || 0;
        return (
          <Card
            key={`user-${idx}`}
            current={today}
            username={username}
          />
        );
      })}
    </Layout>
  );
};

export default Home;
