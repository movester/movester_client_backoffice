const UserListHeaders = ['#', '이름', '이메일', '카카오 아이디', '이메일 인증 여부', '가입 날짜'];
const EventListHeaders = ['#', '제목', '기간', '당첨자'];
const UserDetailRecord = ['월', '포인트'];
const UserDetailAttendance = ['월', '어깨', '다리'];
const stretchingListHeaders = ['#', '제목', '부위', '효과', '자세', '난이도'];
const weekStretchingListHeaders = ['#', '제목', '노출 여부', '등록일'];

const listHeaders = {
  userHeader: ['#', '이름', '이메일', '카카오 아이디', '이메일 인증 여부', '가입 날짜'],
  userlistHeader: ['#', '이름', '이메일', '가입 날짜', '출석 포인트'],
  recordHeader: ['월', '포인트'],
  attendHeader: ['월', '어깨', '다리'],
  adminHeader: ['#', '아이디', '이름', '권한', '등록일'],
};

export {
  UserListHeaders,
  EventListHeaders,
  UserDetailRecord,
  UserDetailAttendance,
  stretchingListHeaders,
  weekStretchingListHeaders,
  listHeaders,
};
