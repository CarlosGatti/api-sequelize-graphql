import * as Sequelize from "sequelize";
import { BaseModelInterface } from "../interfaces/BaseModelInterface";
import { PossibleFragmentSpreads } from "graphql/validation/rules/PossibleFragmentSpreads";
import { ModelsInterface } from "../interfaces/ModelsInterface";

export interface PostAttributes {
    id?: number,
    title?: string,
    content?: string,
    photo?: string,
    author?: number,
    createdAt?: string,
    updatedAt?: string
}

export interface PostInstance extends Sequelize.Instance<PostAttributes>{}
export interface PostModel extends BaseModelInterface, Sequelize.Model<PostInstance, PostAttributes>{}
export default (sequelize: Sequelize.Sequelize, Datatypes: Sequelize.DataTypes): PostModel => {
    const Post: PostModel = sequelize.define('Post', {
        id:{
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: Datatypes.STRING,
            allowNull: false
        },
        content:{
            type: Datatypes.TEXT,
            allowNull: false
        },
        photo:{
            type: Datatypes.BLOB({
                length: 'long'
            }),
            allowNull: false
        }
    },{
        tableName: 'posts'
    });

    Post.associate = (models: ModelsInterface): void => {
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
                field: 'author',
                name:'author'
            }
        })
    } 

    return Post;
}