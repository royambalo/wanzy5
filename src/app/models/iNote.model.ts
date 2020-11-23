import { IClassGroup } from './iClassGroup.model';
import { IUser } from './iUser.model';
import { IFile } from './iFile.model';

export interface INote {
  // constructor(
  //   public id: string,
  //   public classGroup: IClassGroup,
  //   public title: string,
  //   public text: string,
  //   public date: Date,
  //   public  createdBy: IUser,
  //   public attachments: IFile[]
  // ){}
  id: string;
  classGroup: IClassGroup;
  title: string;
  text: string;
  date: string;
  createdBy: IUser;
  attachments: IFile[];
}
