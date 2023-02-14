export interface ResultRequest<T> {
  isSuccess: boolean;
  status_code: number;
  length: number;
  results:Array<T>;


}
