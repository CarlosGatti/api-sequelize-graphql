import { GraphQLResolveInfo } from "graphql";
import { DbConnection } from "../../../interfaces/DbConnectionInterface";
import { UserInstance } from "../../../models/UserModel";
import { Transaction } from "sequelize";
import { handleError, throwError } from "../../../utils/utils";
import { compose } from "../../../composable/composable.resolver";
import SupplierModel from "../../../models/SupplierModel";

export const supplierResolvers = {

    Supplier: {

    },

    Query: {
    
        suppliersMaterial: (parent, { first = 10, offset = 0 }, { db }: { db: DbConnection }, info: GraphQLResolveInfo) => {
            return db.Supplier
                .findAll({
                    limit: first,
                    offset: offset,  
                    where: {
                        Type: 1 //Material and parts
                      }                
                }).catch(handleError);
        },

        suppliersService: (parent, { first = 10, offset = 0 }, { db }: { db: DbConnection }, info: GraphQLResolveInfo) => {
            return db.Supplier
                .findAll({
                    limit: first,
                    offset: offset,  
                    where: {
                        Type: 2 //Service
                      }                
                }).catch(handleError);
        },


    },

    
};