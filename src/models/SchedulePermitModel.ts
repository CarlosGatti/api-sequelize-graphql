import * as Sequelize from 'sequelize';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs';

import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface SchedulePermitAttributes {
    ScheduleId?: number;
    PermitId?: number;
    DateIssuance?: Date;
}

export interface SchedulePermitInstance extends Sequelize.Instance<SchedulePermitAttributes>, SchedulePermitAttributes { }

export interface SchedulePermitModel extends BaseModelInterface, Sequelize.Model<SchedulePermitInstance, SchedulePermitAttributes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): SchedulePermitModel => {

    const SchedulePermit: SchedulePermitModel =
        sequelize.define('SchedulePermit', {
            DateIssuance: {
                type: DataTypes.DATE,
                allowNull: false
            }
        }, {
                tableName: 'SchedulePermit',
            });

            SchedulePermit.associate = (models: ModelsInterface): void =>{

                SchedulePermit.belongsTo(models.Schedule, {
                    foreignKey:{
                        allowNull:false,
                        field: 'ScheduleId',
                        name: 'ScheduleId'
                    }
                });
        
                SchedulePermit.belongsTo(models.Permit, {
                    foreignKey:{
                        allowNull: false,
                        field: 'PermitId',
                        name: 'PermitId'
                    }
                })
            }
    
    SchedulePermit.associate = (models: ModelsInterface): void => { };

    return SchedulePermit;

};