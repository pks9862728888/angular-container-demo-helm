import { Component, OnInit } from '@angular/core';
import { TableData } from './table-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data: TableData;

  constructor() {
    this.data = {
      columns: [],
      data: [],
      resultColIdx: 2,
      errors: []
    };
  }

  ngOnInit(): void {
    this.data = getData();
  }

}

function getData(): TableData {
  return {
    columns: ['Source', 'Test name', 'Result', 'Unique Identifier', 'Is Exit', 'Col 1', 'Col 2', 'Col 3'],
    data: [{
      node1Data: ['INDIA', 'JURISDICTION_PRODUCT_IDENTIFIER_EVENT_TEST_2', 'PASS', 'ABXL0000000000033000000023456789', 'true', '1', '2', '3'],
      node2Data: ['US', 'JURISDICTION_PRODUCT_IDENTIFIER_EVENT_TEST_1', 'PASS', 'ABXL0000000000033000000023456789', 'true', '1', '2', '3'],
      mismatchIdx: [],
      ticketUrl: ''
    }, {
      node1Data: ['INDIA', 'Test 2', 'FAIL', 'ABXL0000000000033000000023456299', 'true', '3', '2', '1'],
      node2Data: ['US', 'Test 2', 'FAIL', 'ABXL0000000000033000000023456799', 'false', '1', '2', '3'],
      mismatchIdx: [4, 5, 7],
      ticketUrl: ''
    }, {
      node1Data: ['INDIA', 'Test 3', 'CANNOT_BE_DETERMINED', 'ABXL0000000000033000000023456779', '', '', '', ''],
      node2Data: ['US', 'Test 3', 'CANNOT_BE_DETERMINED', 'ABXL0000000000033000000023456779', '', '', '', ''],
      mismatchIdx: [],
      ticketUrl: ''
    }],
    resultColIdx: 2,
    errors: []
  };
}

