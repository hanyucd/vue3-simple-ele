export interface ISearchRecomment {
  label: string;
  value: number;
}

export interface ISearchResult {
  type?: number;
  label?: string;
  resultCount?: number;
}

export interface IBanner {
  imgUrl: string;
}

export interface ITransformer {
  imgUrl: string;
  label: string;
}

export interface ICountdown {
  time: number;
  goods: IGood;
}

export interface IScrollBarInfo {
  type: string;
  badge: string;
  detail: string;
  btn: string;
}

export interface IHomeInfo {
  banner: IBanner[];
  searchRecomments: ISearchRecomment[];
  scrollBarInfoList: IScrollBarInfo[];
  transformer: ITransformer[];
  countdown: ICountdown;
  activities: string[];
}
