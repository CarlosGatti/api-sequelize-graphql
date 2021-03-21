import * as Sequelize from 'sequelize';

import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface SupplierAttributes {
    SupplierId?: number;
    Name?: string;
    Type?: number;
    SupplierJobDescription: string;
}

export interface SupplierInstance extends Sequelize.Instance<SupplierAttributes>, SupplierAttributes { }

export interface SupplierModel extends BaseModelInterface, Sequelize.Model<SupplierInstance, SupplierAttributes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): SupplierModel => {

    const Supplier: SupplierModel =
        sequelize.define('Supplier', {
            SupplierId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            Name: {
                type: DataTypes.STRING(200),
                allowNull: false
            },
            Type: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            Information: {
                type: DataTypes.TEXT,
                allowNull: false
            },
        }, {
                tableName: 'Supplier',
            });


    Supplier.associate = (models: ModelsInterface): void => {
        Supplier.belongsToMany(models.Schedule, {
            through: 'ScheduleSupplier',
            foreignKey: 'SupplierId',
        })
    }

    return Supplier;
};