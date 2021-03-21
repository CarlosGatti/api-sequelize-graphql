import * as Sequelize from 'sequelize';

import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface GroupAttributes {
    GroupId?: number;
    Role?: string;
    Desc?: string;
}

export interface GroupInstance extends Sequelize.Instance<GroupAttributes>, GroupAttributes { }

export interface GroupModel extends BaseModelInterface, Sequelize.Model<GroupInstance, GroupAttributes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): GroupModel => {

    const Group: GroupModel =
        sequelize.define('Group', {
            GroupId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            Role: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            Desc: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
        }, {
                tableName: 'Group',
            });


    Group.associate = (models: ModelsInterface): void => {
        Group.belongsToMany(models.User, {
            // as: 'schedule',
            through: 'UserGroup',
            foreignKey: 'GroupId',
        })
    }

    return Group;
};