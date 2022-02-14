import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Pagination({ total, page, setPage }) {
  const numPages = Math.ceil(total / 10);
  const lastNumber = Math.floor(Math.floor(total / 10) / 5) * 5;

  const [pageCnt, setPageCnt] = useState(1);
  const [pageRange] = useState(5);

  const prev = () => {
    setPage(pageCnt - pageRange);
    setPageCnt(pageCnt - pageRange);
  };

  const next = () => {
    setPage(pageCnt + pageRange);
    setPageCnt(pageCnt + pageRange);
  };
  const pageArr = [];
  for (let i = 0; i <= numPages; i += 1) pageArr.push(i);
  return (
    <StyledPageWrap>
      <StyledPageButton onClick={prev} disabled={page < 6}>
        &lt;
      </StyledPageButton>
      {pageArr.slice(pageCnt, pageCnt + pageRange).map(index => (
        <StyledPageButton key={index} onClick={() => setPage(index)} className={page === index ? 'active' : null}>
          {index}
        </StyledPageButton>
      ))}
      <StyledPageButton onClick={next} disabled={page + 5 > lastNumber}>
        &gt;
      </StyledPageButton>
    </StyledPageWrap>
  );
}

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

const StyledPageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const StyledPageButton = styled.button`
  color: black;
  margin-right: 10px;
  cursor: pointer;
  font-size: 16px;

  &.active {
    color: ${({ theme }) => theme.darkPulple};
  }
`;

export default Pagination;
