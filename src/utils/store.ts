export const getUsernames = (): string[] => {
  const stored = localStorage.getItem('users');
  return stored ? JSON.parse(stored) as string[] : [];
};

export const setUsernames = (usernames: string[]): void => {
  localStorage.setItem('users', JSON.stringify(usernames));
};

export const addUsername = (username: string): void => {
  setUsernames(
    getUsernames().concat([username]),
  );
};
