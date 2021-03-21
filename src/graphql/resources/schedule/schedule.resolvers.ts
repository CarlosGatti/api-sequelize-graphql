import { GraphQLResolveInfo } from "graphql";
import { DbConnection } from "../../../interfaces/DbConnectionInterface";
import { ScheduleInstance } from "../../../models/ScheduleModel";
import { Mutation } from "../../mutation";
import { Transaction } from "sequelize";
import { handleError, throwError } from "../../../utils/utils";
import { authResolvers } from "../../../composable/auth.resolver";
import { compose } from "../../../composable/composable.resolver";
import { AuthUser } from "../../../interfaces/AuthUserInterface";

export const scheduleResolvers = {
 
    


    Schedule: {
        parts: (schedule, { first = 10, offset = 0 }, { db }: { db: DbConnection }, info: GraphQLResolveInfo) => {
            return db.Parts
                .findAll({
                    limit: first,
                    offset: offset,
                    include: [{
                        model: db.Schedule,
                        where: { ScheduleId: schedule.ScheduleId }
                    }],
                }).catch(handleError);
        },

        executions: (schedule, { first = 10, offset = 0 }, { db }: { db: DbConnection }, info: GraphQLResolveInfo) => {
            return db.Execution
                .findAll({
                    where: { Status: 0 },
                    limit: first,
                    offset: offset,
                    include: [{
                        model: db.Schedule,
                        where: { ScheduleId: schedule.ScheduleId },                       
                    }],
                }).catch(handleError);    
                  

        },
    },

    Query: {

        schedules: (parent, { first = 200, offset = 0 }, { db }: { db: DbConnection }, info: GraphQLResolveInfo) => {
            return db.Schedule
                .findAll({
                    limit: first,
                    offset: offset,
                    order: [['ScheduleId', 'DESC']],
                }).catch(handleError);
        },

        schedule: (parent, { id }, { db }: { db: DbConnection }, info: GraphQLResolveInfo) => {
            id = parseInt(id);
            return db.Schedule
                .findById(id)
                .then((schedule: ScheduleInstance) => {
                    throwError(!schedule, `Schedule with id ${id} not found!`);
                    return schedule;
                }).catch(handleError);
        }
    },

    Mutation: {
        
        createSchedule: compose(...authResolvers)((parent, { input }, { db, authUser }: { db: DbConnection, authUser: AuthUser }, info: GraphQLResolveInfo) => {
            return db.sequelize.transaction((t: Transaction) => {
                return db.Schedule
                    .create(input, { transaction: t });
            })
                .catch(handleError);
        }),


        updateSchedule: compose(...authResolvers)((parent, { input }, { db, authUser }: { db: DbConnection, authUser: AuthUser }, info: GraphQLResolveInfo) => {

            var id = parseInt(input.ScheduleId);

            return db.sequelize.transaction((t: Transaction) => {
                return db.Schedule
                    .findById(id)
                    .then((schedule: ScheduleInstance) => {
                        throwError(!schedule, `Post with id ${id} not found!`);
                        return schedule.update(input, { transaction: t })
                    })
            }).catch(handleError);
        }),


        deleteSchedule: compose(...authResolvers)((parent, { id }, { db, authUser }: { db: DbConnection, authUser: AuthUser }, info: GraphQLResolveInfo) => {
            return db.sequelize.transaction((t: Transaction) => {
                return db.Schedule
                    .findById(id)
                    .then((schedule: ScheduleInstance) => {
                        if (!schedule) throw new Error(`Schedule with not found!`)
                        return schedule.destroy({ transaction: t })
                            .then(schedule => true)
                        throwError(!schedule, `Schedule with id not found!`);
                    }).catch(handleError);
            })
        })

    }
};