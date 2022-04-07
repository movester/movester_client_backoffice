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
  const [reloading, setReloading] = useState(false);
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

  const onUpdateExpose = async e => {
    e.preventDefault();

    try {
      const { data } = await axios.patch('weeks/expose', {
        weekIdx: idx,
      });

      if (data.success) {
        setErrMsg('노출 변경 성공');
        handleErrModal();
      }
      setReloading(!reloading)
    } catch (err) {
      setErrModalOn(prev => !prev);
      setErrMsg(err.response.data.error);
    }
  };

  const onDeleteExpose = async e => {
    e.preventDefault();

    try {
      const { data } = await axios.delete(`weeks/expose/${idx}`);

      if (data.success) {
        setErrMsg('노출 취소 성공');
        handleErrModal();
      }
      setReloading(!reloading)
    } catch (err) {
      setErrModalOn(prev => !prev);
      setErrMsg(err.response.data.error);
    }
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
  }, [reloading]);

  return loading ? (
    <Loading />
  ) : (
    <>
      <WeekStretchingDetail
        weekStretching={weekStretching}
        handleDeleteModal={handleDeleteModal}
        onUpdateExpose={onUpdateExpose}
        onDeleteExpose={onDeleteExpose}
      />
      {deleteModalOn && (
        <WeekStretchingDeleteModal
          onClose={handleDeleteModal}
          weekStretchingIdx={idx}
          setErrMsg={setErrMsg}
          handleErrModal={handleErrModal}
        />
      )}
      {errModalOn && <ConfirmModal onClose={handleErrModal} title="일주일 스트레칭" content={errMsg} />}
    </>
  );
}

export default WeekStretchingDetailPage;
