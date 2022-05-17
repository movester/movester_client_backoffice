import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ModalPortal from './ModalPortal';
import axios from '../../../services/defaultClient';

function StretchingDeleteModal({ onClose, stretchingIdx, setErrMsg, handleErrModal }) {
  const navigate = useNavigate();

  const onStretchingDelete = async () => {
    try {
      await axios.delete(`/stretchings/${stretchingIdx}`);
      navigate('/stretching');
    } catch (err) {
      setErrMsg(err.response.data.error);
      handleErrModal();
    }
  };
  return (
    <ModalPortal>
      <Container>
        <Content>
          <Title>스트레칭 삭제</Title>
          <p>해당 스트레칭 삭제하시겠습니까?</p>
          <FlexContainer>
            <StyledButton
              type="button"
              onClick={() => {
                onStretchingDelete();
                onClose();
              }}
            >
              예
            </StyledButton>
            <StyledButton type="button" onClick={onClose}>
              아니오
            </StyledButton>
          </FlexContainer>
        </Content>
      </Container>
    </ModalPortal>
  );
}

StretchingDeleteModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  stretchingIdx: PropTypes.number,
  setErrMsg: PropTypes.func.isRequired,
  handleErrModal: PropTypes.func.isRequired,
};

StretchingDeleteModal.defaultProps = {
  stretchingIdx: null,
};

export default StretchingDeleteModal;

const Container = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Content = styled.div`
  background: #ffffff;
  padding: 20px;
  width: 400px;
  height: auto;
  border-radius: 12px;
  text-align: center;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 20px;
`;

const FlexContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 30px;
`;

const StyledButton = styled.button`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: ${({ theme }) => theme.lightPurple};
  border-radius: 10px;
  font-size: 16px;
  color: #ffffff;
  font-weight: 800;
  text-align: center;
  cursor: pointer;
  border: none;
`;
