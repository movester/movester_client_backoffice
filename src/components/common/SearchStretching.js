import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import InputTitle from './elements/InputTitle';
import Input from './elements/Input';
import Button from './button/Button';

function SearchStretching({ day }) {
  return (
    <>
      <InputTitle text={day} />
      <StyledStretchingSearch>
        <Button text="스트레칭 검색" type="stretching" />
        <Input />
      </StyledStretchingSearch>
    </>
  );
}

SearchStretching.propTypes = {
  day: PropTypes.string.isRequired,
};

export default SearchStretching;

const StyledStretchingSearch = styled.div`
  display: flex;
  .stretching {
    width: 250px;
  }
  input {
    margin-left: 40px;
  }
`;
