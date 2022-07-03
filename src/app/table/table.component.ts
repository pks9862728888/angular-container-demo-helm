import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ReconResultEnum } from './recon-result-enum';
import { TableDataI, DataFilterI } from './table-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {

  @Input() data: TableDataI;
  private clearDataFilterEventSubscription: Subscription;
  @Input() onClearDataFilterClick: Observable<void>;
  appliedFilters: DataFilterI[] = [];

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

  applyFilter(query: any, idx: number) {
    // Do case insensitive search
    let keyword: string = query.target.value.toLocaleLowerCase();
    this.appliedFilters[idx] = {key: keyword};

    // Search in the actual list of input data
    this.data.filteredData = this.data.data.filter(d => {
      for (let i = 0; i < this.appliedFilters.length; i++) {
        if (this.appliedFilters[i].key.length > 0) {
          let res = d.node1Data[i].toLocaleLowerCase().includes(this.appliedFilters[i].key) || 
                d.node2Data[i].toLocaleLowerCase().includes(this.appliedFilters[i].key);
          if (res == false) {
            return false;
          }
        }
      }
      return true;
    });
  }

  clearFilter() {
    this.data.filteredData = this.data.data.filter(d => true);
    let emptyFilters: DataFilterI[] = [];
    for (let i = 0 ; i < this.data.columns.length; i++) {
      emptyFilters.push({key: ''});
    }
    this.appliedFilters = emptyFilters;
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
