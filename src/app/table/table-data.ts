export interface TableDataI {
    columns: Array<String>,
    data: Array<DataNodeI>,
    testNameColIdx: number,
    resultColIdx: number,
    errors: Array<String>
    missingColIdxList: Array<Number>
}

export interface DataNodeI {
    node1Data: Array<String>,
    node2Data: Array<String>,
    mismatchIdxList: Array<Number>,
    ticketUrl: string
}
