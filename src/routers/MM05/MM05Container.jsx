import React from "react";
import MM05Presenter from "./MM05Presenter";
import useInput from "../../Hooks/useinput";
import { REGIST_USER } from "./MM05Queries";
import { useMutation } from "react-apollo-hooks";

const MM05Container = () => {
  ////////   VARIABLE     ////////

  ////////   USE STATE    ////////
  const newName = useInput("");
  const newEmail = useInput("");
  const newMobile = useInput("");
  const newNickName = useInput("");
  const newAddress = useInput("");
  const newDetailAddress = useInput("");
  const newZoneCode = useInput("");

  ////////   USE REF      ////////

  ////////   USE CONTEXT  ////////

  ////////   USE QUREY    ////////

  ////////   USE MUTATION ////////
  const [registUserMutation] = useMutation(REGIST_USER);

  ////////   USE EFFECT   ////////

  /////// HANDLER ///////
  const registUserHandler = async () => {
    console.log(newName.value);
    if (!newName.value || newName.value.trim() === "") {
      alert("이름은 필수 입력사항 입니다.");
      return;
    }
    console.log(newEmail.value);
    if (!newEmail.value || newEmail.value.trim() === "") {
      alert("이메일은 필수 입력사항 입니다.");
      return;
    }
    console.log(newMobile.value);
    if (!newMobile.value || newMobile.value.trim() === "") {
      alert("전화번호는 필수 입력사항 입니다.");
      return;
    }
    console.log(newNickName.value);
    if (!newNickName.value || newNickName.value.trim() === "") {
      alert("별명은 필수 입력사항 입니다.");
      return;
    }
    console.log(newZoneCode.value);
    if (!newZoneCode.value || newZoneCode.value.trim() === "") {
      alert("주소는 필수 입력사항 입니다.");
      return;
    }

    const { data } = await registUserMutation({
      variables: {
        name: newName.value,
        email: newEmail.value,
        mobile: newMobile.value,
        nickname: newNickName.value,
        zonecode: newZoneCode.value,
        address: newAddress.value,
        detailAddress: newDetailAddress.value || `_`,
      },
    });

    console.log(data);
  };

  const searchPostHandler = () => {
    new daum.Postcode({
      oncomplete: function (data) {
        newZoneCode.setValue(data.zonecode);
        newAddress.setValue(data.address);
      },
    }).open();
  };

  return (
    <MM05Presenter
      //useInput
      newName={newName}
      newEmail={newEmail}
      newMobile={newMobile}
      newNickName={newNickName}
      newZoneCode={newZoneCode}
      newAddress={newAddress}
      newDetailAddress={newDetailAddress}
      //handler
      registUserHandler={registUserHandler}
      searchPostHandler={searchPostHandler}
    />
  );
};
export default MM05Container;
