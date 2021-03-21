const suppliersTypes = `
    type Supplier {
        SupplierId: ID!
        Name: String!  
        Type: Int!  
        Information: String
    }
`;

const suppliersQueries = `
    suppliersMaterial(first: Int, offset: Int): [ Supplier ]
    suppliersService(first: Int, offset: Int): [ Supplier ]
`;

const suppliersMutations = `
  
`;

export {
    suppliersTypes,
    suppliersQueries
}



