const permitsTypes = `
    type Permit {
        PermitId: ID!
        Type: String!  
    }
`;

const permitsQueries = `
    permits(first: Int, offset: Int): [ Permit ]
`;

const permitsMutations = `
  
`;

export {
    permitsTypes,
    permitsQueries
}



