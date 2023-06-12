import styled from "@emotion/styled";
import Image from "next/image";
import closeIc from "@/img/ic_close.png";
import googleIc from "@/img/ic_google.png";
import kakaoIc from "@/img/ic_kakao.png";

// 모달 창 뒷배경
export const LoginModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 여기에 만들고 싶은 모달 스타일 구현
export const LoginModalContent = styled.div`
  width: 530px;
  height: 650px;
  position: absolute;
  user-select: none;
  .closeBtn {
    position: absolute;
    top: 29px;
    right: 29px;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  .contentBox {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    .copy {
      margin: 71px;
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 36px;
      text-align: center;
    }
    > a {
      text-decoration: none;
      width: 300px;
      min-height: 45px;
      margin-bottom: 20px;
      padding-left: 14px;
      border-radius: 5px;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 100%;
      display: flex;
      gap: 90px;
      align-items: center;
      cursor: pointer;
    }
    .google {
      margin-top: 7px;
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.15);
      color: rgba(0, 0, 0, 0.54);
    }
    .kakao {
      background: #fee500;
      border: 1px solid #fee500;
      color: rgba(0, 0, 0, 0.85);
    }
    .loginState {
      width: 300px;
      margin-top: 11px;
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 18px;
      color: #515151;
      > * {
        cursor: pointer;
      }
    }
    .register {
      margin-top: 132px;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      > a {
        color: var(--theme-color);
      }
    }
  }
`;

interface clickModalType {
  closeModal: any;
}
const LoginModal = ({ closeModal }: clickModalType) => {
  return (
    <LoginModalBox>
      {/* // 모달을 닫는 state함수가 아래로 전파되는 것을 막아줌 */}
      <LoginModalContent onClick={(e) => e.stopPropagation()}>
        <button className="closeBtn" onClick={closeModal}>
          <Image src={closeIc} alt="닫기" />
        </button>
        <div className="contentBox">
          <div className="copy">
            나를 너무 잘 아는
            <br />
            멘토를 만나는 곳
          </div>
          <a
            className="google"
            href="https://www.menjil-menjil.com/auth/google"
          >
            <Image src={googleIc} alt="구글" width={18} height={18} />
            구글 로그인
          </a>
          <a className="kakao" href="https://www.menjil-menjil.com/auth/kakao">
            <Image src={kakaoIc} alt="카카오" width={18} height={18} />
            카카오 로그인
          </a>{" "}
          <div className="loginState">
            <input type="checkbox" id="keepLoggedIn" name="keepLoggedIn" />
            <label htmlFor="keepLoggedIn">로그인 상태 유지</label>
          </div>
          <div className="register">
            <a href="/register">아직 회원이 아니신가요?</a>
          </div>
        </div>
      </LoginModalContent>
    </LoginModalBox>
  );
};

export default LoginModal;
