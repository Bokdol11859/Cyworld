import React, { useContext, useState, createContext, ReactNode } from "react";

export const DiaryContext = createContext({
  diaryData: {
    title: "",
    content: "",
  },
  setDiaryData: ({ title, content }: { title: string; content: string }) => {},
});

export const useDiary = () => useContext(DiaryContext);

type Props = {
  children: ReactNode;
};

export const DiaryProvider = ({ children }: Props) => {
  const [diaryData, setDiaryData] = useState({
    title: "",
    content: "",
  });

  const value = {
    diaryData,
    setDiaryData,
  };

  return (
    <DiaryContext.Provider value={value}>{children}</DiaryContext.Provider>
  );
};
