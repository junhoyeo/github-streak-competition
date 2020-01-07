import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Button from '../components/atoms/Button';
import Layout from '../components/atoms/Layout';
import Card from '../components/organisms/Card';
import Header from '../components/templates/Header';
import CreateModal from '../components/templates/CreateModal';

import { IStreakModel } from '../utils/api/getUserStreaks';

import '../styles/override.scss';
import { getUsernames } from '../utils/store';

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
  const [usernames, setUsernames] = useState<string[]>([]);
  const [data, setData] = useState<UserData>();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(
    () => setUsernames(
      getUsernames(),
    ),
    [],
  );

  useEffect(
    () => {
      loadStreakData(usernames, setData);
    },
    [usernames],
  );

  const onOpenModal = () => setModalOpen(true);

  const onCloseModal = () => setModalOpen(false);

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
      <Button
        onClick={onOpenModal}
      >
        새로운 멤버 추가 👋
      </Button>
      <CreateModal
        isOpen={isModalOpen}
        onRequestClose={onCloseModal}
      />
    </Layout>
  );
};

export default Home;
