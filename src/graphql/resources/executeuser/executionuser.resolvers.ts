import { GraphQLResolveInfo } from "graphql";
import { DbConnection } from "../../../interfaces/DbConnectionInterface";
import { UserInstance } from "../../../models/UserModel";
import { Transaction } from "sequelize";
import { handleError, throwError } from "../../../utils/utils";
import { compose } from "../../../composable/composable.resolver";
import { AuthUser } from "../../../interfaces/AuthUserInterface";
import { authResolver, authResolvers } from "../../../composable/auth.resolver";
import { verifyTokenResolver } from "../../../composable/verify-token.resolver";
import { ExecutionUserInstance } from "../../../models/ExecutionUserModel";


export const executionUserResolvers = {

    ExecutionUser: {

    },

    Query: {

    },

    Mutation: {
        createTeam: (parent, { input }, { db }: { db: DbConnection }, info: GraphQLResolveInfo) => {
          
            input.id = parseInt(input.id);
            input.ExecutionId = parseInt(input.ExecutionId);

            return db.sequelize.transaction((t: Transaction) => {
                return db.ExecutionUser
                    .create(input, { transaction: t });
            }).catch(handleError);
        },


        deleteTeam: (parent, { input }, { db }: { db: DbConnection }, info: GraphQLResolveInfo) => {
            return db.sequelize.transaction((t: Transaction) => {
                return db.ExecutionUser
                
                
                .findOne({ where: { ExecutionId: input.ExecutionId, id: input.id } })

                    .then((executionuser: ExecutionUserInstance) => {
                        return executionuser.destroy({ transaction: t })
                    })
            }).catch(handleError);
        },



        
    }
};