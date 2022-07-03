import { Component, Input } from '@angular/core';
import { TableDataI } from './table-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() data: TableDataI;

  constructor() {
    this.data = {
      columns: [],
      data: [],
      resultColIdx: 2,
      testNameIdx: 1,
      errors: []
    }
  }
}
