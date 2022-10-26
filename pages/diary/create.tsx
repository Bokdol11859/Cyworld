import React from "react";
import Header from "../../components/global/Header";

type Props = {};

const CreateDiary = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-0">
      <Header title="Diary | 글 등록" subtitle="" />
    </div>
  );
};

export default CreateDiary;
