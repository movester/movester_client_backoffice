import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ProfileInput({ text, name, value, onChange }) {
  return (
    <StyledInputWrap className="profile-title">
      <p>{text}</p>
      <input type="password" name={name} value={value} onChange={onChange} />
    </StyledInputWrap>
  );
}

ProfileInput.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ProfileInput;

const StyledInputWrap = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    flex-flow: column;
    align-items: start;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  p {
    color: #615b5b;
    font-weight: bold;
    font-size: 18px;
  }
  input {
    width: 100%;
    max-width: 380px;
    height: 40px;
    border-radius: 10px;
    background-color: rgba(196, 196, 196, 0.3);
    border: none;
    padding: 0 10px;
    @media screen and (max-width: 1024px) {
      margin-top: 20px;
    }
  }
`;
