import profileImg from "@/img/img_default-profile.png";
import LogoutIc from "@/img/ic_logout.svg"
import Image from "next/image";
import {UserProfileContainerDiv} from "@/component/main/userAside/userAside.style";
import {signOut, useSession} from "next-auth/react";
import { useRouter } from "next/router";

const UserProfile = () => {
  const { data: sessionData, status: sessionStatus } = useSession();
  const router = useRouter();
  const logOutHandler = () => {
    if (sessionData) {
      signOut({redirect:false, callbackUrl: "/"});
      router.push("/");
    }
    //로컬로그아웃함수;
  };

  return (
    <UserProfileContainerDiv>
      <div className="profileInfo wrap">
        <div className="profileImgBox">
          <Image src={profileImg} alt="profile" width={50} height={50}/>
        </div>
        <div className="profileContent userInfoTextStyle">
          <div className="userInfoTitleStyle marginB8">{"김감최"} 님</div>
          <div className="marginB3">닉네임</div>
          <div className="wrap center">
            학교
            <div className="line"/>
            전공
          </div>
        </div>
      </div>
      <div className="btnLogout" onClick={logOutHandler}>
        <p className="btnLogoutTextMargin btnLogoutTextStyle">로그아웃</p>
        <LogoutIc width='16' height='16'/>
      </div>
    </UserProfileContainerDiv>
  );
};
export default UserProfile;