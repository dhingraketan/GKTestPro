export class FullTestCase{
    id!: String;
    title!: String;
    summary!: String;
    preCons!: String;
    steps!: String;
    expectedResult!: String;
    createdOn!: String;
    LastModified!: String;
    executionHistory!: [{
        id: String,
        timestamp: String,
        executedBy: String,
        result: String,
        comments: String,
        projectId: String,
        baselineId: String,
        testRunId: String
    }]
}