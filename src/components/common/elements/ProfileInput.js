import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ProfileInput({ text, name, value, onChange }) {
  return (
    <StyledInputWrap className="profile-title">
      <input type="password" name={name} value={value} onChange={onChange} placeholder={text}/>
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
  width: 100%;
  margin-bottom: 0px;
  p {
    color: #615b5b;
    font-weight: bold;
    font-size: 18px;
  }
  input {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    background-color: rgba(196, 196, 196, 0.3);
    border: none;
    padding: 0 10px;
  }
`;
