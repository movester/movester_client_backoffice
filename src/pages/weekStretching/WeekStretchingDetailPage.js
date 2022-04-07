import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../services/defaultClient';

import Loading from '../../components/common/elements/Loading';
import WeekStretchingDetail from '../../components/weekStretching/WeekStretchingDetail';
import WeekStretchingDeleteModal from '../../components/common/Modal/WeekStretchingDeleteModal';
import ConfirmModal from '../../components/common/Modal/ConfirmModal';

function WeekStretchingDetailPage() {
  const { idx } = useParams();
  const [loading, setLoading] = useState(true);
  const [weekStretching, setWeekStretching] = useState({});

  const [deleteModalOn, setDeleteModalOn] = useState(false);
  const handleDeleteModal = () => {
    setDeleteModalOn(prev => !prev);
  };

  const [errModalOn, setErrModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const handleErrModal = () => {
    setErrModalOn(!errModalOn);
  };

  useEffect(() => {
    const getWeekStretching = async () => {
      try {
        setLoading(true);
        const result = await axios.get(`/weeks/${idx}`);
        setWeekStretching(result.data.data);
      } catch (err) {
        setErrMsg(err.response.data.error);
        handleErrModal();
      }
      setLoading(false);
    };
    getWeekStretching();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      <WeekStretchingDetail weekStretching={weekStretching} handleDeleteModal={handleDeleteModal} />
      {deleteModalOn && (
        <WeekStretchingDeleteModal
          onClose={handleDeleteModal}
          weekStretchingIdx={idx}
          setErrMsg={setErrMsg}
          handleErrModal={handleErrModal}
        />
      )}
      {errModalOn && <ConfirmModal onClose={handleErrModal} title="일주일 스트레칭 등록 실패" content={errMsg} />}
    </>
  );
}

export default WeekStretchingDetailPage;
