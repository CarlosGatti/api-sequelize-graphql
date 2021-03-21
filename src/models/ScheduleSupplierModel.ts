import * as Sequelize from 'sequelize';

import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface ScheduleSupplierAttributes {
    SupplierId?: number;
    ScheduleId?: number;  
    DateSupplierStart?: Date;
    DateSupplierEnd?: Date;
    SupplierJobDescription: String;
}

export interface ScheduleSupplierInstance extends Sequelize.Instance<ScheduleSupplierAttributes>, ScheduleSupplierAttributes { }

export interface ScheduleSupplierModel extends BaseModelInterface, Sequelize.Model<ScheduleSupplierInstance, ScheduleSupplierAttributes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): ScheduleSupplierModel => {

    const ScheduleSupplier: ScheduleSupplierModel =
        sequelize.define('ScheduleSupplier', {
            DateSupplierStart: {
                type: DataTypes.DATE,
                allowNull: false
            },
            DateSupplierEnd: {
                type: DataTypes.DATE,
                allowNull: false
            },
            SupplierJobDescription: {
                type: DataTypes.TEXT,
                allowNull: false
            }
        }, {
                tableName: 'ScheduleSupplier',
            });

    ScheduleSupplier.associate = (models: ModelsInterface): void => {

        ScheduleSupplier.belongsTo(models.Schedule, {
            foreignKey: {
                allowNull: false,
                field: 'ScheduleId',
                name: 'ScheduleId'
            }
        });

        ScheduleSupplier.belongsTo(models.Supplier, {
            foreignKey: {
                allowNull: false,
                field: 'SupplierId',
                name: 'SupplierId'
            }
        })
    }

    ScheduleSupplier.associate = (models: ModelsInterface): void => { };

    return ScheduleSupplier;

};