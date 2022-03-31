import styled from 'styled-components';

const StyledButton = styled.button`
  display: block;
  width: 380px;
  height: 45px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  background-color: ${({ theme }) => theme.lightPurple};
  margin: 10px auto;
  border-radius: 15px;

  &.kakao-login {
    background-image: url('/assets/kakao_login_large_wide.png');
    background-size: cover;
    background-position: center;
    display: block;
  }

  &.right {
    float: right;
  }

  @media (max-width: 400px) {
    width: 250px;
    height: 40px;

    &.kakao-login {
      background-position: initial;
    }
  }
`;

export default StyledButton;
