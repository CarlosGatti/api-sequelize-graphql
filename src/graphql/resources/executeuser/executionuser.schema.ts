const executionUserTypes = `

    type ExecutionUser {
        id: Int!
        ExecutionId: Int
        Status: Int
    }


    input TeamInput {
        ExecutionId: String
        id: String
    }
`;


const executionUserMutations = `
    createTeam(input: TeamInput!): ExecutionUser
    deleteTeam(input: TeamInput!): Boolean
`;

export {
    executionUserTypes,
    executionUserMutations
}