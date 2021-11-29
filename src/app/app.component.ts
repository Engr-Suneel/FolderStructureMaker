import { Component, OnInit } from '@angular/core';
import { FileTypeEnum } from './enums/file-type.enum';
import { INodeModel } from './interfaces/node-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  nodeList: INodeModel[] = [];
  nodeName: string = "";
  isAddingNode: boolean = false;

  constructor() {

  }

  ngOnInit() {
    this.nodeList = [];
  }

  addOnRoot() {
    this.isAddingNode = true;
  }

  onCancel() {
    this.nodeName = "";
    this.isAddingNode = false;
  }

  onSave() {
    if (!this.nodeName || !this.nodeName.trim()) {
      return;
    }

    let nodeItem: INodeModel = {
      id: new Date().getTime().toString(),
      icon: "bi bi-folder2-open",
      name: this.nodeName,
      type: FileTypeEnum.FOLDER,
      children: [],
      showBtn: false,
      showInput: false
    }
    this.nodeList.push(nodeItem);

    this.onCancel();
  }

  addFile(item: INodeModel, parent: number, current: number) {
    if (item && item.id && parent > -1 && current > -1) {

      let nodeItem: INodeModel = {
        id: new Date().getTime().toString(),
        icon: "bi bi-file-earmark",
        name: "filename.txt",
        type: FileTypeEnum.FILE,
        children: [],
        showBtn: false,
        showInput: false
      }

      if (current > 0) {
        this.nodeList[parent].children[current]?.children?.push(nodeItem);
      } else {
        this.nodeList[parent]?.children?.push(nodeItem);
      }
    }
  }

  addFolder(item: INodeModel, parent: number, current: number) {
    if (item && item.id && parent > -1 && current > -1) {

      let nodeItem: INodeModel = {
        id: new Date().getTime().toString(),
        icon: "bi bi-folder2-open",
        name: "folderName",
        type: FileTypeEnum.FOLDER,
        children: [],
        showBtn: false,
        showInput: false
      }

      if (current > 0) {
        this.nodeList[parent].children[current]?.children?.push(nodeItem);
      } else {
        this.nodeList[parent]?.children?.push(nodeItem);
      }
    }
  }
}
