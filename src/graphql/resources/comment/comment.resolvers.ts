import { GraphQLResolveInfo, UniqueInputFieldNamesRule } from "graphql";
import { DbConnection } from "../../../interfaces/DbConnectionInterface";
import { Transaction } from "sequelize";
import { CommentInstance } from "../../../models/CommentModel";
import { cpus } from "os";
import { handleError, throwError } from "../../../utils/utils";
import { compose } from "../../../composable/composable.resolver";
import { authResolver, authResolvers } from "../../../composable/auth.resolver";
import { AuthUser } from "../../../interfaces/AuthUserInterface";

export const commentResolvers = {


    Comment: {
        user: (commnet, { args }, { db }: { db: DbConnection }, info: GraphQLResolveInfo) => {
            return db.User
                .findById(commnet.get('user'))
                .catch(handleError);
        },

        post: (commnet, { args }, { db }: { db: DbConnection }, info: GraphQLResolveInfo) => {
            return db.Post
                .findById(commnet.get('post'))
                .catch(handleError);
        }
    },


    Query: {
        commentsByPost: (parent, { postId, first = 10, offset = 0 }, { db }: { db: DbConnection }, info: GraphQLResolveInfo) => {
          
            postId = parseInt(postId);
            
            return db.Comment
                .findAll({
                    where: { post: postId },
                    limit: first,
                    offset: offset
                }).catch(handleError);
        }
    },

    Mutation: {

        createComment: compose(...authResolvers)((parent, { input }, { db, authUser }: { db: DbConnection, authUser: AuthUser }, info: GraphQLResolveInfo) => {
            
            input.user = authUser.id;
            
            return db.sequelize.transaction((t: Transaction) => {
                return db.Comment
                    .create(input, { transaction: t });
            }).catch(handleError);
        }),


        updateComment: compose(...authResolvers)((parent, { id, input }, { db, authUser }: { db: DbConnection, authUser: AuthUser }, info: GraphQLResolveInfo) => {

            input.user = authUser.id;
            return db.sequelize.transaction((t: Transaction) => {
                return db.Comment
                    .findById(id)
                    .then((comment: CommentInstance) => {
             

                        throwError(!comment, `Comment with id ${id} not found!`);
                        throwError(comment.get('user') != authUser.id, 'Unauthorized! You can only delete comments by yourself!')

                        return comment.update(input, { transaction: t });
                    });
            }).catch(handleError);
        }),

        deleteComment: compose(...authResolvers)((parent, { id }, { db, authUser }: { db: DbConnection, authUser: AuthUser }, info: GraphQLResolveInfo) => {

            id = parseInt(id);

            return db.sequelize.transaction((t: Transaction) => {
                return db.Comment
                    .findById(id)
                    .then((comment: CommentInstance) => {
                        if (!comment) throw new Error(`Comment with id ${id} not found!`);
                        throwError(!comment, `Comment with id ${id} not found!`);
                        throwError(comment.get('user') != authUser.id, 'Unauthorized! You can only delete comments by yourself!')
                        return comment.destroy({ transaction: t })
                            .then(comment => true)
                            .catch(error => {
                                // poderia fazer alguma manipulação do erro aqui
                                return false;
                            });
                    }).catch(handleError);
            });
        })

    }
};