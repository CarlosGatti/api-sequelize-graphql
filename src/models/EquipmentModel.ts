import * as Sequelize from 'sequelize';

import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface EquipmentAttributes {
    EquipmentId?: number;
    Name?: string;
    Type?: Int16Array;
}

export interface EquipmentInstance extends Sequelize.Instance<EquipmentAttributes>, EquipmentAttributes { }

export interface EquipmentModel extends BaseModelInterface, Sequelize.Model<EquipmentInstance, EquipmentAttributes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): EquipmentModel => {

    const Equipment: EquipmentModel =
        sequelize.define('Equipment', {
            EquipmentId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            Name: {
                type: DataTypes.STRING(150),
                allowNull: false
            },
            Type: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
        }, {
                tableName: 'Equipment',
            });


    Equipment.associate = (models: ModelsInterface): void => {
        Equipment.belongsToMany(models.Schedule, {
            through: 'ScheduleEquipment',
            foreignKey: 'EquipmentId',
        })
    }

    return Equipment;
};