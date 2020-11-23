export interface IClassGroup {
  id: string;
  name: string;
  date: string; // .toIsosString()
  type: eClassGroupType;
}
export enum eClassGroupType {
  MATH = 0,
  BIBLE = 1,
  HEBREW = 2,
  HISTORY = 3,
  SPORT = 4,
}
