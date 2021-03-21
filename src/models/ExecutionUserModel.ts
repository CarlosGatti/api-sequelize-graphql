import * as Sequelize from 'sequelize';
import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface ExecutionUserAttributes {
    Status: number;
    id?: number;
    ExecutionId?: number;
    updateAt?: string;
    createAt?: string;
}

export interface ExecutionUserInstance extends Sequelize.Instance<ExecutionUserAttributes>, ExecutionUserAttributes { }
export interface ExecutionUserModel extends BaseModelInterface, Sequelize.Model<ExecutionUserInstance, ExecutionUserAttributes> { }
export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): ExecutionUserModel => {

    const ExecutionUser: ExecutionUserModel =
        sequelize.define('ExecutionUser', {
            ExecntionUserId: {
                type: DataTypes.INTEGER,
                allowNull: true,
                autoIncrement: true,
                primaryKey: true
            },
            id: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            Status: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
        }, {
                tableName: 'ExecutionUser',
            });

            ExecutionUser.associate = (models: ModelsInterface): void => {}
     
    return ExecutionUser;
};