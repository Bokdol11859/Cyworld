import { useRouter } from "next/router";

type Props = {
  titleRef: React.RefObject<HTMLInputElement>;
  contentRef: React.RefObject<HTMLTextAreaElement>;
  handleEdit?: () => void;
  handleCreate?: () => void;
  diaryData?: {
    title: string;
    content: string;
  };
};

const Editor = ({
  titleRef,
  contentRef,
  handleEdit,
  handleCreate,
  diaryData,
}: Props) => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-center gap-4 justify-center w-full h-72 border-[1.5px] border-[#DDDDDD] rounded-md">
        <input
          placeholder="제목을 입력해주세요"
          defaultValue={diaryData?.title}
          ref={titleRef}
          className="text-xs pl-2 w-11/12 h-6 border-[1.5px] border-[#DDDDDD] rounded-md"
        />
        <textarea
          ref={contentRef}
          defaultValue={diaryData?.content}
          className="w-11/12 h-3/4 border-[1.5px] border-[#DDDDDD] rounded-md"
        />
      </div>
      <div className="flex w-full items-center justify-center gap-6 py-5">
        <div
          className={buttonStyle}
          onClick={handleEdit !== undefined ? handleEdit : handleCreate}
        >
          {handleEdit !== undefined ? "수정하기" : "생성하기"}
        </div>
        <div
          onClick={() => {
            router.back();
          }}
          className={buttonStyle}
        >
          취소하기
        </div>
      </div>
    </>
  );
};

const buttonStyle =
  "border-[#666666] border-[1.5px] px-3 py-[2px] bg-[#D9D9D9] hover:bg-[#666666] hover:text-white rounded-md cursor-pointer text-sm";

export default Editor;
