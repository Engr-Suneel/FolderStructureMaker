import { FileTypeEnum } from "../enums/file-type.enum";

export interface INodeModel {
  id: string;
  type: FileTypeEnum;
  name: string;
  children: INodeModel[];
  icon: string;
  showBtn?: boolean;
  showInput?: boolean;
}