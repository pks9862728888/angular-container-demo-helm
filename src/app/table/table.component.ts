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
      testNameColIdx: 1,
      errors: []
    }
  }

  getBackgroundColorClass(rowData: Array<String>, idx: number, mismatchIdx: Array<Number>) {
    if (idx == this.data.resultColIdx) {
      if (rowData.length > this.data.resultColIdx && this.data.resultColIdx > 0) {
        const result = rowData[this.data.resultColIdx];
        return ReconResultEnum[result as keyof typeof ReconResultEnum];
      }
    } else {
      if (mismatchIdx.includes(idx)) {
        return ReconResultEnum.FAIL;
      }
    }
    return '';
  }

  isEmpty(ticketUrl: string) {
    return ticketUrl.length == 0;
  }
}
