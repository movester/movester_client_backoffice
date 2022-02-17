import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from '../../services/defaultClient';

import Main from '../common/Main';
import Content from '../common/Content';
import UserCount from '../common/elements/UserCount';
import { listHeaders } from '../../dataList/listTableHeaders';
import Pagination from '../common/Pagination';

function AdminListComponent() {
  const { admin } = useSelector(({ admin }) => admin);
  const { rank, adminIdx } = admin;
  const [admins, setAdmins] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  const offset = (page - 1) * limit;

  const getAdminList = async () => {
    try {
      const result = await axios.get('/admins');

      setAdmins([...admins, ...result.data.data]);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getAdminList();
  }, []);

  return (
    <Main>
      <Content title="총 관리자 수" type="half">
        <UserCount list={admins} />
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
              <li>{admin.rank}</li>
              <li>{admin.createAt}</li>
              {rank === 1 ? (
                adminIdx === admin.adminIdx ? null : (
                  <DeleteIcon style={{ cursor: 'pointer', color: 'tomato' }} />
                )
              ) : null}
            </ul>
          ))}
        </StyledListTable>
        <Pagination total={admins.length} limit={limit} page={page} setPage={setPage} />
      </Content>
    </Main>
  );
}

export default AdminListComponent;

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
