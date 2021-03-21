import * as Sequelize from 'sequelize';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs';

import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface SchedulePartsAttributes {
    DatePurcharsedParts?: Date;
    DeliveryParts: number;
}

export interface SchedulePartsInstance extends Sequelize.Instance<SchedulePartsAttributes>, SchedulePartsAttributes { }

export interface SchedulePartsModel extends BaseModelInterface, Sequelize.Model<SchedulePartsInstance, SchedulePartsAttributes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): SchedulePartsModel => {

    const ScheduleParts: SchedulePartsModel =
        sequelize.define('ScheduleParts', {
            DatePurcharsedParts: {
                type: DataTypes.DATE,
                allowNull: false
            },
            DeliveryParts: {
                type: DataTypes.DATE,
                allowNull: false
            }
        }, {
                tableName: 'ScheduleParts',
            });

    ScheduleParts.associate = (models: ModelsInterface): void => { };

    return ScheduleParts;

};