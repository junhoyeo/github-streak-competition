import * as React from 'react';
import styled from 'styled-components';

import { TextForTitle } from '../atoms/Text';

const Header: React.FC = () => (
  <HeaderContainer>
    <HeaderTitle>
      🌿 그들만의 리그
    </HeaderTitle>
  </HeaderContainer>
);

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const HeaderTitle = styled(TextForTitle)`
  font-size: 1.5rem;
`;
