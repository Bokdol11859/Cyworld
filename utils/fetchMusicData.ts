import { Music } from "../typings";

export const fetchMusicData = async () => {
  const Musics: Music[] = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getMusics`
  )
    .then((res) => res.json())
    .then((data) => data.data);
  console.log(Musics);
  return Musics;
};
