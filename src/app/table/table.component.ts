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
      errors: [],
      missingColIdxList: []
    }
  }

  getBackgroundColorClass(rowData: Array<String>, idx: number, mismatchIdxList: Array<Number>) {
    if (idx == this.data.resultColIdx) {
      if (rowData.length > this.data.resultColIdx && this.data.resultColIdx > 0) {
        const result = rowData[this.data.resultColIdx];
        return ReconResultEnum[result as keyof typeof ReconResultEnum];
      }
    } else {
      if (mismatchIdxList.includes(idx)) {
        return ReconResultEnum.FAIL;
      } else if (this.data.missingColIdxList.includes(idx)) {
        return 'table-secondary';
      }
    }
    return '';
  }

  isEmpty(ticketUrl: string) {
    return ticketUrl.length == 0;
  }
}
