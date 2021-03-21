import { GraphQLResolveInfo } from "graphql";
import { DbConnection } from "../../../interfaces/DbConnectionInterface";
import { UserInstance } from "../../../models/UserModel";
import { Transaction } from "sequelize";
import { handleError, throwError } from "../../../utils/utils";
import { compose } from "../../../composable/composable.resolver";

export const groupsResolvers = {

    Group: {

        users: (groups, { first = 10, offset = 0 }, { db }: { db: DbConnection }, info: GraphQLResolveInfo) => {
            return db.User
                .findAll({                 
                    limit: first,   
                    offset: offset,
                    include: [{
                        model: db.Group,    
                        where: { GroupId: groups.GroupId }                         
                      }],
                }).catch(handleError);
        },
    },

    Query: {
    
        groups: (parent, { first = 10, offset = 0 }, { db }: { db: DbConnection }, info: GraphQLResolveInfo) => {
            return db.Group
                .findAll({
                    limit: first,
                    offset: offset
                }).catch(handleError);
        },


    },


    Mutation: {
        


        


    }


    
};