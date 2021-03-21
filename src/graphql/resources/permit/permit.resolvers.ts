import { GraphQLResolveInfo } from "graphql";
import { DbConnection } from "../../../interfaces/DbConnectionInterface";
import { UserInstance } from "../../../models/UserModel";
import { Transaction } from "sequelize";
import { handleError, throwError } from "../../../utils/utils";
import { compose } from "../../../composable/composable.resolver";

export const permitsResolvers = {

    Permit: {

    },

    Query: {
    
        permits: (parent, { first = 10, offset = 0 }, { db }: { db: DbConnection }, info: GraphQLResolveInfo) => {
            return db.Permit
                .findAll({
                    limit: first,
                    offset: offset
                }).catch(handleError);
        },


    },

    
};