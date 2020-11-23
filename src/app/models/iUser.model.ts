export interface IUser {
  id: string;
  name: string;
  img: string;
  role: eUserRole;
}
export enum eUserRole {
  TEACHER = 0,
  STUDENT = 1,
}
