import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../services/defaultClient';

import StretchingDetail from '../../components/stretching/StretchingDetail';
import ModalPortal from '../../components/common/Modal/ModalPortal';
import Loading from '../../components/common/elements/Loading';
import ConfirmModal from '../../components/common/Modal/ConfirmModal';
import StretchingDeleteModal from '../../components/common/Modal/StretchingDeleteModal';

function StretchingDetailPage() {
  const { idx } = useParams();
  const [loading, setLoading] = useState(null);
  const [isUpdate, setIsUpdate] = useState(null);
  const handleIsUpdate = () => {
    setIsUpdate(prev => !prev);
    alert(isUpdate);
  };
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

  // const onSubmit = async e => {
  //   e.preventDefault();

  //   const filterValidValue = arr => arr.filter(v => v);

  //   try {
  //     const { data } = await axios.post('stretchings', {
  //       title,
  //       contents,
  //       mainBody: +mainBody,
  //       subBody: +subBody,
  //       tool: +tool ? +tool : null,
  //       youtubeUrl,
  //       image,
  //       postures: filterValidValue([+posture1, +posture2, +posture3]),
  //       effects: filterValidValue([+effect1, +effect2, +effect3]),
  //     });

  //     if (data.success) {
  //       const newStretchingIdx = data.data.stretchingIdx;
  //       navigate(`/stretching/${newStretchingIdx}`);
  //     }
  //   } catch (err) {
  //     setErrModalOn(prev => !prev);
  //     setErrMsg(err.response.data.error);
  //   }
  // };

  return loading ? (
    <Loading />
  ) : (
    <>
      <StretchingDetail
        idx={stretching?.stretchingIdx}
        title={stretching?.title}
        youtubeUrl={stretching?.youtubeUrl}
        image={stretching?.image}
        contents={stretching?.contents}
        mainBody={stretching?.mainBody}
        subBody={stretching?.subBody}
        tool={stretching?.tool}
        posture={stretching?.posture}
        effect={stretching?.effect}
        adminIdx={stretching?.adminIdx}
        createAt={stretching?.createAt}
        difficulty={stretching?.difficulty}
        handleDeleteModal={handleDeleteModal}
        isUpdate={isUpdate}
        handleIsUpdate={handleIsUpdate}
      />
      <ModalPortal>
        {deleteModalOn && (
          <StretchingDeleteModal
            onClose={handleDeleteModal}
            stretchingIdx={idx}
            setErrMsg={setErrMsg}
            handleErrModal={handleErrModal}
          />
        )}
        {errModalOn && <ConfirmModal onClose={handleErrModal} title="스트레칭 상세 조회 실패" content={errMsg} />}
      </ModalPortal>
    </>
  );
}

export default StretchingDetailPage;
