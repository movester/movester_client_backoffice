import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import ModalPortal from '../ModalPortal';
import SearchStretchingPage from './SearchStretchingPage';

function SearchStretchingModal({ onClose, handleWeekStretching }) {
  return (
    <ModalPortal>
      <Container>
        <Content>
          <Title>스트레칭 검색</Title>
          <CloseButton onClick={onClose}>x</CloseButton>
          <SearchStretchingPage handleWeekStretching={handleWeekStretching} onClose={onClose}/>
        </Content>
      </Container>
    </ModalPortal>
  );
}

SearchStretchingModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  handleWeekStretching: PropTypes.func.isRequired,
};

export default SearchStretchingModal;

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
  position: relative;
  background: #ffffff;
  padding: 20px;
  width: auto;
  height: auto;
  border-radius: 12px;
  text-align: center;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 15px;
  top: 5px;
  font-size: 29px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 20px;
`;
