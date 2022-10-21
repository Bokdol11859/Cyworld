import React from "react";
import { Music } from "../typings";

type Props = {
  musics: Music[];
};

const MusicBoard = ({ musics }: Props) => {
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
          <tr className="flex items-center justify-center border-y-[1px] bg-[#EEEEEE] border-[#999999] w-[480px]">
            <th className="w-14 flex items-left justify-center">
              <input type="checkbox" />
            </th>
            <th className="w-6 mr-4">번호</th>
            <th className="w-60 text-left">곡명</th>
            <th className="w-40 text-left">아티스트</th>
          </tr>
          {musics.map((music) => (
            <>
              <tr className={TableRowStyle}>
                <th className={TableRowHeadStyle}>
                  <input type="checkbox" />
                </th>
                <th className="w-6 mr-4">{music.id}</th>
                <th className="w-60 text-left">{music.title}</th>
                <th className="w-40 text-left">{music.artist}</th>
              </tr>
            </>
          ))}
        </table>
      </div>
    </div>
  );
};

const TableRowStyle =
  "flex items-center justify-center border-dotted border-b-[1.5px] border-[#999999] w-[480px] py-[1px]";

const TableRowHeadStyle = "w-14 flex items-left justify-center";

export default MusicBoard;
