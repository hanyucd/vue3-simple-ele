export interface IResponse<T = unknown> {
  code: number;
  msg: string;
  data: T | null;
}
