import React, { useState, useEffect } from 'react';
import axios from '../../services/defaultClient';

import StretchingList from '../../components/stretching/StretchingList';
import ModalPortal from '../../components/common/Modal/ModalPortal';
import ConfirmModal from '../../components/common/Modal/ConfirmModal';

function StretchingListPage() {
  const [stretchings, setStretchings] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  const offset = (page - 1) * limit;

  const [errModalOn, setErrModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const handleErrModal = () => {
    setErrModalOn(!errModalOn);
  };


  useEffect(() => {
    const getStretchingList = async () => {
      try {
        const result = await axios.get(`/stretchings?title=&mainCategory=&subCategory=&posture=&effect=&tool=`);

        setStretchings([...result.data.data]);
      } catch (err) {
        setErrMsg(err.response.data.error);
        handleErrModal();
      }
    };

    getStretchingList();
  }, []);

  return (
    <>
      <StretchingList
        offset={offset}
        limit={limit}
        page={page}
        setPage={setPage}
        stretchings={stretchings}
      />
      <ModalPortal>
        {errModalOn && <ConfirmModal onClose={handleErrModal} title="스트레칭 리스트 응답 실패" content={errMsg} />}
      </ModalPortal>
    </>
  );
}

export default StretchingListPage;
