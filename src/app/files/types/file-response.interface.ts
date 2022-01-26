export interface IFileResponse {
  _id?: string;
  readonly username? : string;
  readonly fileName : string;
  readonly ext : string;
  allowed?: boolean;
  readonly size: number;
  customName: string;
  commited: boolean;
  readonly mimeType: string;

}