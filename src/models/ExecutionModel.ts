import * as Sequelize from 'sequelize';

import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface ExecutionAttributes {
    ExecutionId?: number;

    CustomerName: String;
    City: String;

    ScheduleId?: number;
    DateScheduled?: Date;
    DateScheduledEnd?: Date;
    DateStart: Date;
    DateEnd: Date;
    InstallerNote: String;
    Status: number;
}

export interface ExecutionInstance extends Sequelize.Instance<ExecutionAttributes>, ExecutionAttributes { }

export interface ExecutionModel extends BaseModelInterface, Sequelize.Model<ExecutionInstance, ExecutionAttributes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): ExecutionModel => {

    const Execution: ExecutionModel =
        sequelize.define('Execution', {
            ExecutionId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },

            CustomerName: {
                type: DataTypes.STRING(155),
                allowNull: false,
            },

            City: {
                type: DataTypes.STRING(155),
                allowNull: false,
            },

            DateScheduled: {
                type: DataTypes.DATE,
                allowNull: false
            },
            DateScheduledEnd: {
                type: DataTypes.DATE,
                allowNull: false
            },
            DateStart: {
                type: DataTypes.DATE,
                allowNull: true
            },
            DateEnd: {
                type: DataTypes.DATE,
                allowNull: true
            },
            InstallerNote: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            Status: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }, {
                tableName: 'Execution',
            });

    Execution.associate = (models: ModelsInterface): void => {



        Execution.belongsToMany(models.User, {        
            through: 'ExecutionUser',
            foreignKey: 'ExecutionId',
        });

        Execution.belongsTo(models.Schedule, {
            foreignKey: 'ScheduleId'
        });

    }


    return Execution;

};