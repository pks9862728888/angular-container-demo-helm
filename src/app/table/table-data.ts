export interface TableDataI {
    columns: Array<String>,
    data: Array<DataNodeI>,
    testNameColIdx: number,
    resultColIdx: number,
    errors: Array<String>
}

export interface DataNodeI {
    node1Data: Array<String>,
    node2Data: Array<String>,
    mismatchIdx: Array<Number>,
    ticketUrl: string
}
