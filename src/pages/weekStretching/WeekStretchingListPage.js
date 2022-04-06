import React, { useState, useEffect } from 'react';
import axios from '../../services/defaultClient';

import WeekStretchingList from '../../components/weekStretching/WeekStretchingList';
import ModalPortal from '../../components/common/Modal/ModalPortal';
import ConfirmModal from '../../components/common/Modal/ConfirmModal';
import Loading from '../../components/common/elements/Loading';

function WeekStretchingListPage() {
  const [loading, setLoading] = useState(true);
  const [weekStretchings, setWeekStretchings] = useState([]);
  const [exposingStretching, setExposingStretching] = useState({});

  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const [errModalOn, setErrModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const handleErrModal = () => {
    setErrModalOn(!errModalOn);
  };

  useEffect(() => {
    const getWeekStretchingList = async () => {
      try {
        const result = await axios.get(`/weeks`);

        setWeekStretchings([...result.data.data]);
        setTotal([...result.data.data].length);
      } catch (err) {
        setErrMsg(err.response.data.error);
        handleErrModal();
      }
    };

    const getExposingStretching = async () => {
      try {
        const result = await axios.get(`weeks/expose/stretchings`);
        setExposingStretching(result.data.data);
      } catch (err) {
        setErrMsg(err.response.data.error);
        handleErrModal();
      }
    };

    getWeekStretchingList();
    getExposingStretching();
    setLoading(false);
    setPage(1);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      <WeekStretchingList
        weekStretchings={weekStretchings}
        exposingStretching={exposingStretching}
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
