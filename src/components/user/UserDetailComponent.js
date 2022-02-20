import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import UserTable from '../common/elements/UserTable';
import ListTable from '../common/elements/ListTable';
import Main from '../common/Main';
import Content from '../common/Content';
import Year from '../common/elements/Year';
import { listHeaders } from '../../dataList/listTableHeaders';
import axios from '../../services/defaultClient';

function UserDetail() {
  const month = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
  const { no } = useParams();
  const [user, setUser] = useState([]);
  const [attendYear, setAttendYear] = useState(2021);
  const [recordYear, setRecordYear] = useState(2021);
  const [attendArr, setAttendArr] = useState([]);
  const [recordArr, setRecordArr] = useState([]);

  const getUser = async () => {
    const userInfo = await (await axios.get(`users/info/${no}`)).data.data[0];
    setUser([userInfo]);
  };
  const getAttend = async () => {
    const monthPoint = await (await axios.get(`users/attend-points/${no}?year=${attendYear}`)).data.data;
    const monthParsing = month.map((el, idx) => {
      const data = { month: el, point: monthPoint[idx] ? monthPoint[idx] : 0 };
      return data;
    });
    setAttendArr(monthParsing);
  };

  const getRecord = async () => {
    const record = await (await axios.get(`users/records/${no}?year=${recordYear}`)).data.data;
    const recordParsing = month.map((el, idx) => {
      const data = { month: el, sholder: record[idx][0] ?? 'X', leg: record[idx][1] ?? 'X' };
      return data;
    });
    setRecordArr(recordParsing);
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getRecord();
  }, [recordYear]);

  useEffect(() => {
    getAttend();
  }, [attendYear]);

  const prevClick = (setState, state) => setState(state - 1);
  const nextClick = (setState, state) => setState(state + 1);

  return (
    <Main>
      <Content title={`사용자자 상세 #${user[0]?.userIdx}`}>
        <UserTable headers={listHeaders.userHeader} columns={user} />
      </Content>
      <StyledUserDetail>
        <Content title="출석 포인트" type="half">
          <Year
            Date={attendYear}
            prev={() => prevClick(setAttendYear, attendYear)}
            next={() => nextClick(setAttendYear, attendYear)}
          />
          <ListTable type="half" headers={listHeaders.recordHeader} columns={attendArr} />
        </Content>
        <Content title="기록" type="half">
          <Year
            Date={recordYear}
            prev={() => prevClick(setRecordYear, recordYear)}
            next={() => nextClick(setRecordYear, recordYear)}
          />
          <ListTable type="triple" headers={listHeaders.attendHeader} columns={recordArr} />
        </Content>
      </StyledUserDetail>
    </Main>
  );
}

export default UserDetail;

const StyledUserDetail = styled.section`
  display: flex;
  div {
    margin-bottom: 0;
  }
  div:nth-child(1) {
    margin-right: 50px;
  }
`;
