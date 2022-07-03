export interface TableData {
    columns: Array<String>,
    data: Array<DataNode>,
    resultColIdx: number,
    errors: Array<String>
}

export interface DataNode {
    node1Data: Array<String>,
    node2Data: Array<String>,
    mismatchIdx: Array<Number>,
    ticketUrl: string
}
