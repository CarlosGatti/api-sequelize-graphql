import { GraphQLResolveInfo } from "graphql";
import { DbConnection } from "../../../interfaces/DbConnectionInterface";
import { UserInstance } from "../../../models/UserModel";
import { Transaction } from "sequelize";
import { handleError, throwError } from "../../../utils/utils";
import { compose } from "../../../composable/composable.resolver";
import { AuthUser } from "../../../interfaces/AuthUserInterface";
import { authResolver, authResolvers } from "../../../composable/auth.resolver";
import { verifyTokenResolver } from "../../../composable/verify-token.resolver";
import { ExecutionInstance } from "../../../models/ExecutionModel";

export const executionResolvers = {

    Execution: {

        teams: (execution, { first = 100, offset = 0 }, { db }: { db: DbConnection }, info: GraphQLResolveInfo) => {
            return db.User
                .findAll({    
                    limit: first,   
                    offset: offset,
                    include: [{
                        model: db.Execution,
                        where: { ExecutionId: execution.ExecutionId },                       
                    }],
                }).catch(handleError);
        },
    },

    Query: {

        executions: (parent, { first = 100, offset = 0 }, { db }: { db: DbConnection }, info: GraphQLResolveInfo) => {
            return db.Execution
                .findAll({
                    where: {Status: 0},
                    limit: first,
                    offset: offset
                }).catch(handleError);
        },

        team: (parent, { id }, { db }: { db: DbConnection }, info: GraphQLResolveInfo) => {
           
            id = parseInt(id);

            return db.Execution
            .findAll({
                where: {ExecutionId: id},
            }).catch(handleError);
        },


    },

    Mutation: {

        createExecution: (parent, { input }, { db }: { db: DbConnection }, info: GraphQLResolveInfo) => {         
            input.Status = 0;     
            return db.sequelize.transaction((t: Transaction) => {
                return db.Execution
                    .create(input, { transaction: t });
            }).catch(handleError);
        },

        deleteExecution:((parent, { input }, { db }: { db: DbConnection }, info: GraphQLResolveInfo) => {
            input.Status = 1;
            return db.sequelize.transaction((t: Transaction) => {
                return db.Execution

                    .findById(input.ExecutionId)

                    .then((dados: ExecutionInstance) => {
                        throwError(!input, `Post with id ${input.ExecutionId} not found!`);
                        return dados.update(input, { transaction: t })
                    })
            }).catch(handleError);
        }),

        updateExecution:((parent, { input }, { db }: { db: DbConnection }, info: GraphQLResolveInfo) => {
       
            input.Status = 0;
            return db.sequelize.transaction((t: Transaction) => {
                return db.Execution

                    .findById(input.ExecutionId)

                    .then((dados: ExecutionInstance) => {
                        throwError(!input, `Post with id ${input.ExecutionId} not found!`);
                        return dados.update(input, { transaction: t })
                    })
            }).catch(handleError);
        }),
    }
};