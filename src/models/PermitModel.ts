import * as Sequelize from 'sequelize';

import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface PermitAttributes {
    PermitId?: number;
    Type?: string;
}

export interface PermitInstance extends Sequelize.Instance<PermitAttributes>, PermitAttributes { }

export interface PermitModel extends BaseModelInterface, Sequelize.Model<PermitInstance, PermitAttributes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): PermitModel => {

    const Permit: PermitModel =
        sequelize.define('Permit', {
            PermitId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },       
            Type: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
        }, {
                tableName: 'Permit',
            });


    Permit.associate = (models: ModelsInterface): void => {
        Permit.belongsToMany(models.Schedule, {
            through: 'SchedulePermit',
            foreignKey: 'PermitId',
        })
    }

            
        return Permit;
};