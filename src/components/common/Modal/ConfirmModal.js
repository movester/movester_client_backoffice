import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ConfirmModal({ title, content, onClose }) {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <button type="button" onClick={onClose}>
          x
        </button>
        <p>{content}</p>
      </Content>
    </Container>
  );
}

export default ConfirmModal;

ConfirmModal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

ConfirmModal.defaultProps = {
  title: '',
  content: '',
};

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
  width: 400px;
  height: auto;
  border-radius: 12px;
  text-align: center;
  button {
    position: absolute;
    top: 11px;
    right: 27px;
    font-size: 29px;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 20px;
`;