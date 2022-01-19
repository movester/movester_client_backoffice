import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SelectBox from './SelectBox';
import WhiteButtonComponent from '../utils/WhiteButton';

function ListSearch({ options }) {
  return (
    <StyledListSearch>
      <form>
        <SelectBox color="white" options={options} />
        <input />
        <WhiteButtonComponent text="검색" />
      </form>
    </StyledListSearch>
  );
}

ListSearch.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListSearch;

const StyledListSearch = styled.section`
  form {
    width: 100%;
    display: flex;
  }
  form > * {
    margin-right: 40px;
  }

  input {
    padding: 5px 30px 5px 10px;
    width: 40%;
    border-radius: 10px;
    outline: 0 none;
    border: 2px solid #615b5b;
  }
  input:focus {
    outline: 1px solid ${({ theme }) => theme.darkPulple};
  }
`;
