import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../services/defaultClient';

import StretchingDetail from '../../components/stretching/StretchingDetail';
import Loading from '../../components/common/elements/Loading';
import ConfirmModal from '../../components/common/Modal/ConfirmModal';
import StretchingDeleteModal from '../../components/common/Modal/StretchingDeleteModal';

function StretchingDetailPage() {
  const navigate = useNavigate();
  const { idx } = useParams();
  const [loading, setLoading] = useState(true);

  const [stretching, setStretching] = useState([]);

  const [deleteModalOn, setDeleteModalOn] = useState(false);
  const handleDeleteModal = () => {
    setDeleteModalOn(prev => !prev);
  };

  const [errModalOn, setErrModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const handleErrModal = () => {
    setErrModalOn(!errModalOn);
  };

  const onLinkUpdate = () => {
    navigate(`/stretching/update/${idx}`);
  };

  useEffect(() => {
    const getStretching = async () => {
      try {
        setLoading(true);
        const result = await axios.get(`/stretchings/${idx}`);
        setStretching(result.data.data);
      } catch (err) {
        setErrMsg(err.response.data.error);
        handleErrModal();
      }
      setLoading(false);
    };
    getStretching();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      <StretchingDetail stretching={stretching} onLinkUpdate={onLinkUpdate} handleDeleteModal={handleDeleteModal} />
      {deleteModalOn && (
        <StretchingDeleteModal
          onClose={handleDeleteModal}
          stretchingIdx={idx}
          setErrMsg={setErrMsg}
          handleErrModal={handleErrModal}
        />
      )}
      {errModalOn && <ConfirmModal onClose={handleErrModal} title="스트레칭 상세 조회 실패" content={errMsg} />}
    </>
  );
}

export default StretchingDetailPage;
