import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ReconResultEnum } from './recon-result-enum';
import { TableDataI } from './table-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {

  @Input() data: TableDataI;
  private clearDataFilterEventSubscription: Subscription;
  @Input() onClearDataFilterClick: Observable<void>;

  constructor() {
    this.data = this.getEmptyDataObj();
    this.clearDataFilterEventSubscription = new Subscription();
    this.onClearDataFilterClick = new Observable();
  }

  ngOnInit(): void {
    this.clearFilter();
    this.clearDataFilterEventSubscription = this.onClearDataFilterClick.subscribe(() => this.clearFilter());
  }

  ngOnDestroy(): void {
    if (!this.clearDataFilterEventSubscription.closed) {
      this.clearDataFilterEventSubscription.unsubscribe();
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

  applyFilter(query: any, idx: Number) {
    let keyword: string = query.target.value;
    this.data.filteredData = this.data.filteredData?.filter(d => 
      d.node1Data[+idx].includes(keyword) || d.node2Data[+idx].includes(keyword)
    );
  }

  clearFilter() {
    this.data.filteredData = this.data.data.filter(d => true);
  }

  isEmpty(ticketUrl: string) {
    return ticketUrl.length == 0;
  }

  getEmptyDataObj(): TableDataI {
    return {
      columns: [],
      data: [],
      resultColIdx: 2,
      testNameColIdx: 1,
      errors: [],
      missingColIdxList: []
    };
  }
}
