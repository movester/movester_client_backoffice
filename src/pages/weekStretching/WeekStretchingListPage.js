import React, { useState, useEffect } from 'react';
import axios from '../../services/defaultClient';

import WeekStretchingList from '../../components/weekStretching/WeekStretchingList';
import ModalPortal from '../../components/common/Modal/ModalPortal';
import ConfirmModal from '../../components/common/Modal/ConfirmModal';

function WeekStretchingListPage() {
  const [weekStretchings, setWeekStretchings] = useState([]);

  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const [errModalOn, setErrModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const handleErrModal = () => {
    setErrModalOn(!errModalOn);
  };

  useEffect(() => {
    const getStretchingList = async () => {
      try {
        const result = await axios.get(
          `/weeks`,
        );

        setWeekStretchings([...result.data.data]);
        setTotal([...result.data.data].length);
      } catch (err) {
        setErrMsg(err.response.data.error);
        handleErrModal();
      }
    };

    getStretchingList();
    setPage(1)
  }, []);

  return (
    <>
      <WeekStretchingList
        weekStretchings={weekStretchings}
        total={total}
        page={page}
        setPage={setPage}
      />
      <ModalPortal>
        {errModalOn && <ConfirmModal onClose={handleErrModal} title="스트레칭 리스트 응답 실패" content={errMsg} />}
      </ModalPortal>
    </>
  );
}

export default WeekStretchingListPage;
