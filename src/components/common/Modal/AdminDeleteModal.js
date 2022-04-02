import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import ModalPortal from './ModalPortal';
import axios from '../../../services/defaultClient';

function AdminDeleteModal({ onClose, adminIdx, setErrMsg, handleErrModal }) {
  const onAdminDelete = async () => {
    try {
      await axios.delete(`/admins/${adminIdx}`);
    } catch (err) {
      setErrMsg(err.response.data.error);
      handleErrModal();
    }
  };
  return (
    <ModalPortal>
      <Container>
        <Content>
          <Title>관리자 계정 삭제</Title>
          <p>해당 관리자 계정을 삭제하시겠습니까?</p>
          <FlexContainer>
            <StyledButton
              type="button"
              onClick={() => {
                onAdminDelete();
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

AdminDeleteModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  adminIdx: PropTypes.number,
  setErrMsg: PropTypes.func.isRequired,
  handleErrModal: PropTypes.func.isRequired,
};

AdminDeleteModal.defaultProps = {
  adminIdx: null,
};

export default AdminDeleteModal;

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
