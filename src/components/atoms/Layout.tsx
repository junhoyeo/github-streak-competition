import * as React from 'react';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

import '../../styles/fonts.scss';
import '../../styles/global.scss';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Container>
    {children}
    <ToastContainer />
  </Container>
);

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
