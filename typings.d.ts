export interface Diary {
  contents: string;
  createdAt: string;
  number: number;
  title: string;
  writer: string;
}

export interface Music {
  id: number;
  title: string;
  artist: string;
  input?: boolean;
}
