import React from 'react';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';

import Main from '../common/Main';
import Content from '../common/Content';
import UserCount from '../common/elements/UserCount';
import { listHeaders } from '../../util/listTableHeaders';
import Pagination from '../common/Pagination';

function AdminList({ admins, adminRank, offset, limit, page, setPage, handleDeleteModal, setDeleteAdminIdx }) {
  return (
    <Main>
      <Content title="총 관리자 수" type="half">
        <UserCount cnt={admins?.length} />
      </Content>
      <Content title="관리자 리스트">
        <StyledListTable>
          <ul className="header">
            {listHeaders.adminHeader.map(header => (
              <li key={header}>{header}</li>
            ))}
          </ul>
          {admins.slice(offset, offset + limit).map(admin => (
            <ul key={admin.adminIdx}>
              <li>{admin.adminIdx}</li>
              <li>{admin.id}</li>
              <li>{admin.name}</li>
              <li>{admin.rank ? "super" : "normal"}</li>
              <li>{admin.createAt}</li>
              {adminRank === 1 ? (
                <DeleteIcon
                  style={{ cursor: 'pointer', color: 'tomato' }}
                  onClick={() => {
                    setDeleteAdminIdx(admin.adminIdx);
                    handleDeleteModal();
                  }}
                />
              ) : null}
            </ul>
          ))}
        </StyledListTable>
        <Pagination total={admins.length} limit={limit} page={page} setPage={setPage} />
      </Content>
    </Main>
  );
}

AdminList.propTypes = {
  admins: PropTypes.arrayOf(PropTypes.object).isRequired,
  adminRank: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  handleDeleteModal: PropTypes.func.isRequired,
  setDeleteAdminIdx: PropTypes.func.isRequired,
};

export default AdminList;

const StyledListTable = styled.section`
  /* margin: 10px; */
  ul {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #c4c4c4;
  }
  .header {
    font-weight: 700;
  }
  li {
    width: 20%;
    padding: 10px 5px;
    text-align: center;
    &:nth-child(1) {
      width: 10%;
    }
  }
`;
