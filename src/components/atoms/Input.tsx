import styled from 'styled-components';

export const Input = styled.input`
  font-size: 1.2rem;
  padding: 0.5rem 0.5rem;
  background-color: #f8f9fa;
  border-bottom: 2px solid #dee2e6;
  margin-bottom: 1rem;
  transition: border-color 0.2s ease-out;
  line-height: 1.5;
  box-sizing: border-box;
  width: 100%;
  text-align: center;

  &:focus {
    border-color: #008001;
  }

  &::placeholder {
    color: #cbcfd4;
  }
`;

export default Input;
