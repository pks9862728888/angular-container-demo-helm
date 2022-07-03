import { Component, OnInit } from '@angular/core';
import { TableDataI } from '../table/table-data';
import { ReconResultDataI } from './recon-result-data'

@Component({
  selector: 'app-recon-result',
  templateUrl: './recon-result.component.html',
  styleUrls: ['./recon-result.component.css']
})
export class ReconResultComponent implements OnInit {

  responseData: ReconResultDataI;
  data: TableDataI;
  dataFilter: string = 'CO';

  constructor() {
    this.responseData = {
      'CO': {
        'columns': [],
        'data': [],
        'testNameColIdx': 1,
        'resultColIdx': 2,
        'errors': []
      },
      'CR': {
        'columns': [],
        'data': [],
        'testNameColIdx': 1,
        'resultColIdx': 2,
        'errors': []
      },
      'EQ': {
        'columns': [],
        'data': [],
        'testNameColIdx': 1,
        'resultColIdx': 2,
        'errors': []
      },
      'FX': {
        'columns': [],
        'data': [],
        'testNameColIdx': 1,
        'resultColIdx': 2,
        'errors': []
      },
      'IR': {
        'columns': [],
        'data': [],
        'testNameColIdx': 1,
        'resultColIdx': 2,
        'errors': []
      }
    };
    this.data = {
      'columns': [],
      'data': [],
      'testNameColIdx': 1,
      'resultColIdx': 2,
      'errors': []
    };
  }

  ngOnInit(): void {
    this.responseData = this.getData();
    this.filterData(this.dataFilter);
  }

  getData(): ReconResultDataI {
    return {
      'CO': {
        columns: ['Source', 'Test name', 'Result', 'Unique Identifier', 'Is Exit', 'Col 1', 'Col 2', 'Col 3'],
        data: [{
          node1Data: ['INDIA', 'JURISDICTION_PRODUCT_IDENTIFIER_EVENT_TEST_2', 'PASS', 'ABXL0000000000033000000023456789', 'true', '1', '2', '3'],
          node2Data: ['US', 'JURISDICTION_PRODUCT_IDENTIFIER_EVENT_TEST_1', 'PASS', 'ABXL0000000000033000000023456789', 'true', '1', '2', '3'],
          mismatchIdx: [],
          ticketUrl: 'https://www.google.com'
        }, {
          node1Data: ['INDIA', 'Test 2', 'FAIL', 'ABXL0000000000033000000023456299', 'true', '3', '2', '1'],
          node2Data: ['US', 'Test 2', 'FAIL', 'ABXL0000000000033000000023456799', 'false', '1', '2', '3'],
          mismatchIdx: [4, 5, 7],
          ticketUrl: ''
        }, {
          node1Data: ['INDIA', '', 'CANNOT_BE_DETERMINED', 'ABXL0000000000033000000023456779', '', '', '', ''],
          node2Data: ['US', '', 'CANNOT_BE_DETERMINED', 'ABXL0000000000033000000023456779', '', '', '', ''],
          mismatchIdx: [],
          ticketUrl: ''
        }],
        testNameColIdx: 1,
        resultColIdx: 2,
        errors: []
      },
      'CR': {
        'columns': [],
        'data': [],
        'testNameColIdx': 1,
        'resultColIdx': 2,
        'errors': []
      },
      'EQ': {
        'columns': [],
        'data': [],
        'testNameColIdx': 1,
        'resultColIdx': 2,
        'errors': []
      },
      'FX': {
        'columns': [],
        'data': [],
        'testNameColIdx': 1,
        'resultColIdx': 2,
        'errors': []
      },
      'IR': {
        'columns': [],
        'data': [],
        'testNameColIdx': 1,
        'resultColIdx': 2,
        'errors': []
      }
    };
  }

  filterData(dataFilter: string) {
    switch (dataFilter) {
      case 'CO':
        this.data = this.responseData.CO;
        break;
      case 'CR':
        this.data = this.responseData.CR;
        break;
      case 'EQ':
        this.data = this.responseData.EQ;
        break;
      case 'FX':
        this.data = this.responseData.FX;
        break;
      case 'IR':
        this.data = this.responseData.IR;
        break;
      default:
        console.log("Unknown data filter: " + dataFilter);
    }
  }

}
