import styled from 'styled-components';

type ProfileProps = {
  className?: string;
  username: string;
};

export const Profile = styled.img.attrs<ProfileProps>(({
  username,
  className = '',
}) => ({
  className,
  src: `https://github.com/${username}.png`,
}))<ProfileProps>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export default Profile;
