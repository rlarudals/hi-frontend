import React, { useState } from "react";
import MM04Presenter from "./MM04Presenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { TRY_LOGIN, CHECK_SECRET_CODE } from "./MM04Querise";

const MM04Container = ({ history }) => {
  ////////   VARIABLE     ////////

  ////////   USE STATE    ////////
  const inputEmail = useInput(``);
  const assignment = useInput(``);

  const [tab, setTab] = useState(0);

  ////////   USE REF      ////////

  ////////   USE CONTEXT  ////////

  ////////   USE QUREY    ////////

  ////////   USE MUTATION ////////
  const [tryLoginMutation] = useMutation(TRY_LOGIN);
  const [checkSecretCodeMutation] = useMutation(CHECK_SECRET_CODE);

  ////////   USE EFFECT   ////////
  const loginClickHandler = async () => {
    const { data } = await tryLoginMutation({
      variables: {
        email: inputEmail.value,
      },
    });

    if (data.tryLogin) {
      setTab(1);
    } else {
      alert("가입된 이메일이 아닙니다.");
    }
  };

  const assignmentCheckHandler = async () => {
    console.log(assignment.value);

    const { data } = await checkSecretCodeMutation({
      variables: {
        email: inputEmail.value,
        code: assignment.value,
      },
    });

    if (data.checkSecretCode) {
      alert("로그인 성공");
      history.push("/");

      // 사용자 데이터를 JWT TOKEN으로 생성하여 가져온다
      // 크롬에서 PASSPORT TOKEN을 통해 session에 토큰을 저장하고,
      // 모든 화면에서는 login 상태를 알기 위한 redux || contentAPI를
      // 세팅하여 로그인 상태 유지를 위한 처리를 한다.
    }
  };

  return (
    <MM04Presenter
      inputEmail={inputEmail}
      assignment={assignment}
      loginClickHandler={loginClickHandler}
      assignmentCheckHandler={assignmentCheckHandler}
      tab={tab}
    />
  );
};
export default MM04Container;
