import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ModalPortal from './ModalPortal';
import begImage from '../../../assets/beg.png';

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
  height: 300px;
  border-radius: 12px;
  text-align: center;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 800;
`;

const Image = styled.img`
  width: 100px;
  height: auto;
  margin: 10px 0;
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

function DeleteModal({ title, onClose }) {
  return (
    <ModalPortal>
      <Container>
        <Content>
          <Title>{title}</Title>
          <p>{title} 시, 기존의 데이터가 삭제됩니다.</p>
          <p>정말로 삭제하시겠습니까?</p>
          <Image src={begImage} alt="삭제 이미지" />
          <FlexContainer>
            <StyledButton type="button" onClick={onClose}>
              응, 끝이야
            </StyledButton>
            <StyledButton type="button" onClick={onClose}>
              아니야! 실수였어
            </StyledButton>
          </FlexContainer>
        </Content>
      </Container>
    </ModalPortal>
  );
}

DeleteModal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
};

DeleteModal.defaultProps = {
  title: '',
  onClose: () => {},
};

export default DeleteModal;
