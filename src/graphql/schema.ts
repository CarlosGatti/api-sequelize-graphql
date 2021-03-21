import { makeExecutableSchema } from "graphql-tools";

import { merge } from 'lodash';

import { Query } from './query';
import { Mutation } from './mutation';

import { commentTypes } from "./resources/comment/comment.schema";
import { userTypes } from "./resources/user/user.schema";
import { postTypes } from "./resources/post/post.schema";
import { commentResolvers } from "./resources/comment/comment.resolvers";
import { postResolvers } from "./resources/post/post.resolvers";
import { userResolvers } from "./resources/user/user.resolvers";
import { tokenTypes } from "./resources/token/token.schema";
import { tokenResolvers } from "./resources/token/token.resolvers";
import { scheduleResolvers } from "./resources/schedule/schedule.resolvers";
import { scheduleTypes } from "./resources/schedule/schedule.schema";
import { partResolvers } from "./resources/parts/parts.resolvers";
import { partsTypes } from "./resources/parts/parts.schema";
import { executionTypes } from "./resources/execution/execution.schema";
import { executionResolvers } from "./resources/execution/execution.resolvers";
import { groupsResolvers } from "./resources/group/group.resolvers";
import { groupsTypes } from "./resources/group/group.schema";
import { permitsResolvers } from "./resources/permit/permit.resolvers";
import { permitsTypes } from "./resources/permit/permit.schema";
import { supplierResolvers } from "./resources/supplier/supplier.resolvers";
import { suppliersTypes } from "./resources/supplier/supplier.schema";
import { executionUserResolvers } from "./resources/executeuser/executionuser.resolvers";
import { executionUserTypes } from "./resources/executeuser/executionuser.schema";




const resolvers = merge(
        commentResolvers,
        postResolvers,
        tokenResolvers,
        userResolvers,
        scheduleResolvers,
        partResolvers,
        executionResolvers,
        groupsResolvers,
        permitsResolvers,
        supplierResolvers,
        executionUserResolvers

);

const SchemaDefinition = `
    type Schema {
        query: Query
        mutation: Mutation
    }
`;

export default makeExecutableSchema({
    typeDefs: [
        SchemaDefinition,
        Query,
        Mutation,
        commentTypes,
        postTypes,
        tokenTypes,
        userTypes,
        scheduleTypes,
        partsTypes, 
        executionTypes,
        groupsTypes, 
        permitsTypes,
        suppliersTypes,
        executionUserTypes
    ],
    resolvers
});