const executionTypes = `
    type Execution {    
        ExecutionId: ID!
        CustomerName: String!
        City: String!
        ScheduleId: String
        DateScheduled: String
        DateScheduledEnd: String
        DateStart: String
        DateEnd: String
        Status: String
        InstallerNote: String
        teams(first: Int, offset: Int): [ User ]
    }

    type ExecutionTeam {    
        ExecutionId: ID!
        id: String!
    }

    input ExecutionInput {
        ExecutionId: String
        CustomerName: String
        City: String
        ScheduleId: String
        DateScheduled: String
        DateScheduledEnd: String
        DateStart: String
        DateEnd: String
        InstallerNote: String
    }

    input ExecutionUpdateInput {
        ExecutionId: String
        ScheduleId: String
        DateScheduled: String
        DateScheduledEnd: String
        DateStart: String
        DateEnd: String
        InstallerNote: String
    }
`;

const executionQueries = `
    executions(first: Int, offset: Int): [ Execution ]
    team(id: ID!): [ Execution ]
`;

const executionMutations = `
    createExecution(input: ExecutionInput!): Execution
    deleteExecution(input: ExecutionInput!): Boolean
    updateExecution(input: ExecutionUpdateInput!): Boolean
`;

export {
    executionTypes,
    executionQueries,
    executionMutations
}