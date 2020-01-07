import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  width: 500px;
  padding: 8px 0;
  font-size: 0.9rem;
  font-weight: bold;
  border: 2px solid #008001;
  color: #008001;
  cursor: pointer;
  margin-bottom: 1.5rem;

  &:hover,
  &:focus {
    border-color: darkgreen;
    color: darkgreen;
  }


  /* todo: set media query only on wrapper */
  @media (max-width: 500px) {
    width: 95%;
  }
`;

export default Button;
