import styled from 'styled-components';

export const Text = styled.span`
  color: rgba(0, 0, 0, 0.9);
`;

export default Text;

export const TextForTitle = Text.withComponent('h1');
