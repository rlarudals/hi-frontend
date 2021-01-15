import React from "react";
import MM05Presenter from "./MM05Presenter";
import useInput from "../../Hooks/useInput";
import { REGIST_USER } from "./MM05Queries";
import { useMutation } from "react-apollo-hooks";

const MM05Container = () => {
  //////////// VARIABLE  ////////////////////
  //////////// USE STATE  ///////////////////

  const newEmail = useInput("");
  const newName = useInput("");
  const newNickName = useInput("");
  const newMobile = useInput("");
  const newZoneCode = useInput("");
  const newAddress = useInput("");
  const newDetailAddress = useInput("");

  //////////// USE REF  /////////////////////
  //////////// USE CONTEXT  /////////////////
  ////////////// USE QUERY  /////////////////
  //////////// USE MUTATION  ////////////////

  const [registUserMutation] = useMutation(REGIST_USER);

  ///////////// USE EFFECT  /////////////////

  ////////////// HANDLER  //////////////////

  const registUserHandler = async () => {
    if (!newName.value || newName.value.trim() === "") {
      alert("이름은 필수 입력 상황입니다.");
      return; /* return을 하면 현재 실행중인 함수를 중단시킴 */
    }

    console.log(newEmail.value);

    if (!newEmail.value || newEmail.value.trim() === "") {
      alert("이메일은 필수 입력 상황입니다.");
      return;
    }

    console.log(newNickName.value);

    if (!newNickName.value || newNickName.value.trim() === "") {
      alert("닉네임은 필수 입력 상황입니다.");
      return;
    }

    console.log(newMobile.value);

    if (!newMobile.value || newMobile.value.trim() === "") {
      alert("전화번호는 필수 입력 상황입니다.");
      return;
    }

    if (!newZoneCode.value || newZoneCode.value.trim() === "") {
      alert("주소는 필수 입력 상황입니다.");
      return;
    }

    const { data } = await registUserMutation({
      variables: {
        name: newName.value,
        email: newEmail.value,
        nickName: newNickName.value,
        mobile: newMobile.value,
        zoneCode: newZoneCode.value,
        address: newAddress.value,
        detailAddress: newDetailAddress.value || `-`,
      },
    });

    console.log(data);
  };

  const searchPostHandler = () => {
    new daum.Postcode({
      oncomplete: function (data) {
        newZoneCode.setValue(data.zonecode);
        newAddress.setValue(data.address);
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
        // 예제를 참고하여 다양한 활용법을 확인해 보세요.
      },
    }).open();
  };

  return (
    <MM05Presenter
      newEmail={newEmail}
      newName={newName}
      newNickName={newNickName}
      newMobile={newMobile}
      newZoneCode={newZoneCode}
      newAddress={newAddress}
      newDetailAddress={newDetailAddress}
      //Handler
      registUserHandler={registUserHandler}
      searchPostHandler={searchPostHandler}
    />
  );
};

export default MM05Container;
