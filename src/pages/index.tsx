import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
  usernames: string[],
  callback: (streak: UserData) => void,
): Promise<void> => {
  const userData: UserData = {};
  await Promise.all(
    usernames.map(async (username: string) => {
      const streakData: IStreakModel = await getStreaksByUsername(username);
      userData[username] = streakData;
    }),
  );
  console.log(userData);
  callback(userData);
};

const Home: React.FC = () => {
  // todo: fix structure as list with name field
  const [usernames, setUsernames] = useState<string[]>(['junhoyeo', 'MinSeungHyun', 'suhdonghwi', 'uhmtoto']);
  const [data, setData] = useState<UserData>();

  useEffect(
    () => {
      loadStreakData(usernames, setData);
    },
    [usernames],
  );

  return (
    <Layout>
      <Header />
      {usernames.map((username: string, idx: number) => {
        // const current = streaks?.[username]?.streakCurrent || 0;
        const today = data?.[username]?.contributions[0]?.count || 0;
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
