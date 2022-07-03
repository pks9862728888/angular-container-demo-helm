import { Component, Input } from '@angular/core';
import { ReconResultEnum } from './recon-result-enum';
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

  getColor(rowData: Array<String>) {
    if (rowData.length > this.data.resultColIdx && this.data.resultColIdx > 0) {
      const result = rowData[this.data.resultColIdx];
      return ReconResultEnum[result as keyof typeof ReconResultEnum];
    }
    return '';
  }
}
