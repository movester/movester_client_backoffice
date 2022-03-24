import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ModalPortal from './ModalPortal';

function UpdatePasswordModal({ title, content, onClose }) {
  return (
    <ModalPortal>
      <Container>
        <Content>
          <Title>{title}</Title>
          <StyledClose onClick={onClose}>X</StyledClose>
          {content ? <p>{content}</p> : <p>비밀번호 변경이 완료되었습니다.</p>}
        </Content>
      </Container>
    </ModalPortal>
  );
}

UpdatePasswordModal.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};

export default UpdatePasswordModal;

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
`;

const Content = styled.div`
  background: #ffffff;
  padding: 20px;
  width: 400px;
  height: auto;
  border-radius: 12px;
  text-align: center;
  position: relative;
  li {
    text-align: center;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 20px;
`;

const StyledClose = styled.p`
  position: absolute;
  top: 20px;
  right: 30px;
  cursor: pointer;
`;
