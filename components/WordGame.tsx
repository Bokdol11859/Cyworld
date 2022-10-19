import Image from "next/image";
import React, { useRef, useState } from "react";

type Props = {};

const WordGame = (props: Props) => {
  const [word, setWord] = useState<string>("코드캠프");
  const [result, setResult] = useState<string>("결과!");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (word.slice(-1) == inputRef.current?.value[0]) {
      setResult("정답입니다!");
      setWord(inputRef.current.value);
    } else {
      setResult("오답입니다!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-[220px] h-[168px] bg-[#F6F6F6] border-[#999999] border-solid border-[1.5px] rounded-lg">
      <Image src="/static/train.svg" alt="train" width={40} height={20} />
      <p className="text-xs font-[Pretendard] font-extrabold my-2">끝말잇기</p>
      <p className="text-[9px] font-[Pretendard] text-[#999999]">
        제시어 : {word}
      </p>

      <form
        className="flex gap-2 h-6 items-center my-2"
        onSubmit={handleSubmit}
      >
        <input
          ref={inputRef}
          placeholder="단어를 입력하세요."
          className="w-32 h-full px-1 text-[10px] font-[Pretendard] font-medium border-solid border-black border-[1.5px] rounded-md"
        />
        <button className="px-2 bg-white hover:bg-[#999999] text-black hover:text-white h-full font-[Pretendard] text-xs border-solid border-black border-[1.5px] rounded-md">
          입력
        </button>
      </form>

      <p className="text-sm font-[Pretendard] font-extrabold">{result}</p>
    </div>
  );
};

export default WordGame;
