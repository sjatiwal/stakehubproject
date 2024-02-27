export type Dialogues = {
  character: string;
  text: string;
  series: string;
};

export type HeaderItem = {
  name: string;
  data: string;
};

export type Proverbs = {
  origin: string;
  text: string;
};

export type Rows = {
  author?: string;
  character?: string;
  origin?: string;
  series?: string;
  text?: string;
};

export type TableProps = {
  header: HeaderItem[];
  rows: Rows[];
};

export type Quotes = {
  author: string;
  text: string;
};
