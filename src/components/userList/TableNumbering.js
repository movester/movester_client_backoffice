import React from 'react';
import styled from 'styled-components';

function TableNumbering() {
  return (
    <StyledTableNumbering>
      <span>&lt;</span>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>&gt;</span>
    </StyledTableNumbering>
  );
}

export default TableNumbering;

const StyledTableNumbering = styled.section`
  margin-top: 15px;
  span {
    color: ${({ theme }) => theme.darkPulple};
    margin-right: 10px;
    cursor: pointer;
  }
`;
