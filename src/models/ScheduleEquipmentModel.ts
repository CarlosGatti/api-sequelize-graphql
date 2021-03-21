import * as Sequelize from 'sequelize';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs';

import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface ScheduleEquipmentAttributes {
    ScheduleId?: number;
    EquipmentId?: number;
    DatePurcharsedEquipment?: Date;
    DeliveryEquipment: number;
}

export interface ScheduleEquipmentInstance extends Sequelize.Instance<ScheduleEquipmentAttributes>, ScheduleEquipmentAttributes { }

export interface ScheduleEquipmentModel extends BaseModelInterface, Sequelize.Model<ScheduleEquipmentInstance, ScheduleEquipmentAttributes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): ScheduleEquipmentModel => {

    const ScheduleEquipment: ScheduleEquipmentModel =
        sequelize.define('ScheduleEquipment', {
            DatePurcharsedEquipment: {
                type: DataTypes.DATE,
                allowNull: false
            },
            DeliveryEquipment: {
                type: DataTypes.DATE,
                allowNull: false
            }
        }, {
                tableName: 'ScheduleEquipment',
            });

            ScheduleEquipment.associate = (models: ModelsInterface): void =>{

                ScheduleEquipment.belongsTo(models.Schedule, {
                    foreignKey:{
                        allowNull:false,
                        field: 'ScheduleId',
                        name: 'ScheduleId'
                    }
                });
        
                ScheduleEquipment.belongsTo(models.Equipment, {
                    foreignKey:{
                        allowNull: false,
                        field: 'EquipmentId',
                        name: 'EquipmentId'
                    }
                })
            }
    
            ScheduleEquipment.associate = (models: ModelsInterface): void => { };

    return ScheduleEquipment;

};