const partsTypes = `
    type Parts {
        PartsId: ID!
        Name: String!  
        Type: String!     
    }
`;

const partsQueries = `
    parts(first: Int, offset: Int): [ Parts ]

`;

const partsMutations = `
  
`;

export {
    partsTypes,
    partsQueries
}



