import * as Sequelize from 'sequelize';

import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface WalkThruAttributes {
    ExecutionId?: number;
    ScheduleId?: number;
    DateScheduled?: Date;
    DateScheduledEnd?: Date;
    DateStart: Date;
    DateEnd: Date;
    InstallerNode: String;
}

export interface WalkThruInstance extends Sequelize.Instance<WalkThruAttributes>, WalkThruAttributes { }

export interface WalkThruModel extends BaseModelInterface, Sequelize.Model<WalkThruInstance, WalkThruAttributes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): WalkThruModel => {

    const WalkThru: WalkThruModel =
        sequelize.define('WalkThru', {
            WalkThruId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            DateWalkScheduled: {
                type: DataTypes.DATE,
                allowNull: false
            },
            DateWalk: {
                type: DataTypes.DATE,
                allowNull: false
            },
            ConcretePad: {
                type: DataTypes.STRING(5),
                allowNull: false
            },
            Supplier: {
                type: DataTypes.STRING(5),
                allowNull: false
            },
            Permit: {
                type: DataTypes.STRING(5),
                allowNull: false
            },
            WalkInformation: {
                type: DataTypes.TEXT,
                allowNull: false
            }
        }, {
                tableName: 'WalkThru',
            });

    WalkThru.associate = (models: ModelsInterface): void => {


    }


    return WalkThru;

};