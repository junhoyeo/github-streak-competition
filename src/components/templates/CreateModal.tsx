import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ReactModal from 'react-modal';
import styled from 'styled-components';

import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Text from '../atoms/Text';

import { addUsername } from '../../utils/store';

import 'react-toastify/dist/ReactToastify.css';

const stylesForModal: object = {
  content: {
    borderRadius: '4px',
    bottom: 'unset',
    left: 'unset',
    overflow: 'unset',
    padding: '1.8rem',
    paddingBottom: '0.2rem',
    position: 'relative',
    right: 'unset',
    top: 'unset',
    border: 'none',
  },
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.39)',
    display: 'flex',
    justifyContent: 'center',
  },
};

type CreateModalProps = {
  isOpen: boolean,
  onRequestClose: () => void,
};

export const CreateModal: React.FC<CreateModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const [name, setName] = useState<string>('');

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);

  const onClickCreate = () => {
    addUsername(name);
    onRequestClose();
    toast('추가되었습니다!');
  };

  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={stylesForModal}
    >
      <ModalContainer>
        <Desc>
          깃허브 <strong>사용자 이름</strong>을 입력하세요.
        </Desc>
        <Input
          placeholder="반가워요!"
          value={name}
          onChange={onChangeName}
        />
        <Button
          onClick={onClickCreate}
        >
          추가하기 🙌
        </Button>
      </ModalContainer>
    </ReactModal>
  );
};

export default CreateModal;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Desc = styled(Text)`
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;

  strong {
    font-weight: bold;
    color: #008001;
  }
`;
