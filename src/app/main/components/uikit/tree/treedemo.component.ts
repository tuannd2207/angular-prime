import { Component, OnInit } from '@angular/core';
import { TreeNode} from 'primeng/api';
import {NodeService} from "../../../service/node.service";

@Component({
    templateUrl: './treedemo.component.html'
})
export class TreeDemoComponent implements OnInit {

    files1:  TreeNode<any>[]  = [];

    files2:  TreeNode<any>[]  = [];

    files3:  TreeNode<any>[] = [];

    selectedFiles1: TreeNode<any> | TreeNode<any>[] | null = [];

    selectedFiles2: TreeNode<any> | TreeNode<any>[] | null= [];

    selectedFiles3:TreeNode<any> | TreeNode<any>[] | null = {};

    cols: any[] = [];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then(files => this.files1 = files);
        this.nodeService.getFilesystem().then(files => this.files2 = files);
        this.nodeService.getFiles().then(files => {
            this.files3 = [{
                label: 'Root',
                children: files
            }];
        });

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}
