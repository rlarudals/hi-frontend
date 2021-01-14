import React, { useState } from "react";
import { useQuery } from "react-apollo-hooks";
import MM00Presenter from "./MM00Presenter";
import { GET_ALL_VIDEOS } from "./MM00Querise";
import storageRef from "../../firebase";
import { StoreWriter } from "apollo-boost";

const MM00Container = () => {
  ////////   VARIABLE     ////////

  ////////   USE STATE    ////////
  const [imagePath, setImagePath] = useState(``);

  ////////   USE REF      ////////

  ////////   USE CONTEXT  ////////

  ////////   USE QUREY    ////////
  /// { data, loading, refetch }
  const {
    data: videoDatum,
    loading: videoLoding,
    refetch: videoRefetch,
  } = useQuery(GET_ALL_VIDEOS);

  console.log(videoDatum && videoDatum.getAllVideos);

  ////////   USE MUTATION ////////

  ////////   USE EFFECT   ////////
  const fileChangeHandler = async (e) => {
    console.log(e.target.files[0]);
    const originFile = e.target.files[0];
    const originFileName = e.target.files[0].name;

    console.log(originFile);
    console.log(originFileName);

    const D = new Date();

    const year = D.getFullYear() + "";
    const month = D.getMonth() + 1 + "";
    const date = D.getDate() + "";
    /* date : 날짜 day : 요일 */
    const hour = D.getHours() + "";
    const min = D.getMinutes() + "";
    const sec = D.getSeconds() + "";

    const suffix = year + month + date + hour + min + sec;

    const uploadFileName = originFileName + suffix;

    try {
      await storageRef
        .child(`SOPY/uploads/thumbnail/${uploadFileName}`)
        .put(originFile);

      const url = await storageRef
        .child(`SOPY/uploads/thumbnail/${uploadFileName}`)
        .getDownloadURL();

      setImagePath(url);
    } catch (e) {
      /*여기는 프론트이므로 콘솔로그 에러는 찍으면 사용자에게 에러가 나오므로 적지 않아야 함! */
    }
  };

  return (
    <MM00Presenter
      videoDatum={videoDatum && videoDatum.getAllVideos}
      fileChangeHandler={fileChangeHandler}
      imagePath={imagePath}
    />
  );
};

export default MM00Container;
