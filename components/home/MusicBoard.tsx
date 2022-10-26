import React, { useEffect, useState } from "react";
import { Music } from "../../typings";

type Props = {
  musics: Music[];
};

const MusicBoard = ({ musics }: Props) => {
  const [allChecked, setAllChecked] = useState(false);
  const [musicData, setMusicData] = useState(
    musics.map((music) => {
      const temp = { ...music, input: false };
      return temp;
    })
  );

  const handleAllClick = () => {
    let temp = [...musicData];
    temp.map((music) => {
      music.input = !allChecked;
    });
    setMusicData(temp);
    setAllChecked(!allChecked);
  };

  const handleClick = (id: number) => {
    let temp = [...musicData];
    temp.map((music) => {
      music.id === id && (music.input = !music.input);
    });
    setMusicData(temp);
  };

  return (
    <div>
      <div className="flex items-end mt-5">
        <div className="font-[Lato] font-black text-md text-[#55B2D4] mr-4">
          추억의 BGM
        </div>
        <p className="text-[10px] font-medium mb-[2px]">TODAY CHOICE</p>
      </div>
      <div>
        <table className="text-[10px] text-[#999999] font-[Pretendard]">
          <tr className="flex items-center justify-center border-y-[1px] bg-[#EEEEEE] border-[#999999] w-[450px]">
            <th className="w-14 flex items-left justify-center">
              <input
                type="checkbox"
                onClick={handleAllClick}
                defaultChecked={allChecked}
              />
            </th>
            <th className="w-6 mr-4">번호</th>
            <th className="w-60 text-left">곡명</th>
            <th className="w-40 text-left">아티스트</th>
          </tr>
          {musicData.map((music) => (
            <>
              <tr className={TableRowStyle}>
                <th className={TableRowHeadStyle}>
                  <input
                    type="checkbox"
                    checked={music.input}
                    onChange={() => {
                      handleClick(music.id);
                    }}
                  />
                </th>
                <th className="w-6 mr-4 text-[#0F465E]">{music.id}</th>
                <th className="w-60 text-left text-[#0F465E]">{music.title}</th>
                <th className="w-40 text-left text-[#0F465E]">
                  {music.artist}
                </th>
              </tr>
            </>
          ))}
        </table>
      </div>
    </div>
  );
};

const TableRowStyle =
  "flex items-center justify-center border-dotted border-b-[1.5px] border-[#999999] w-[450px] py-[1px]";

const TableRowHeadStyle = "w-14 flex items-left justify-center";

export default MusicBoard;
