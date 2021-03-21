const groupsTypes = `
    type Group {
        GroupId: ID!
        Role: String!  
        Desc: String!   
        users(first: Int, offset: Int): [ User ]
    }

`;

const groupsQueries = `
    groups(first: Int, offset: Int): [ Group ]
`;

const groupsMutations = `


`;



export {
    groupsTypes,
    groupsQueries
}



