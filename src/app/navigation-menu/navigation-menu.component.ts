import { Component } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import {MatIcon} from '@angular/material/icon';


interface DBGenNavigation {
  name: string;
  children?: DBGenNavigation[];
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})

export class NavigationMenuComponent {
  treeControl = new NestedTreeControl<DBGenNavigation>(node => node.children);
  dataSource = new MatTreeNestedDataSource<DBGenNavigation>();
  hasChild = (_: number, node: DBGenNavigation) => !!node.children && node.children.length > 0;
  constructor() {
    this.dataSource.data = Navigation_Tree;
  }

}

const Navigation_Tree: DBGenNavigation[] =
  [
    {
      name: 'Schema',
      children: [
        { name: 'Tables' },
        { name: 'Columns' }
      ]
    },
    {
      name: 'Code',
      children: [
        {
          name: 'CSharp',
          children: [
            { name: 'Entity-POCO' },
            { name: 'Entity-EntityFramework-DataAnnotations' },
            { name: 'Entity-EntityFramework-FluentMapping' },
            { name: 'Entity-Dapper' },
            { name: 'EntityFramework-DBContext' },
            { name: 'EntityFramework-DAL' }
          ]
        },
        { name: 'TypeScript' }
      ]
    },
    {
      name: 'HTML',
      children: [
        { name: 'PlainHtml' },
        { name: 'BootStrap' },
        { name: 'Material' }
      ]
    }
  ];