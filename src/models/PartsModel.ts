import * as Sequelize from 'sequelize';

import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface PartstAttributes {
    PartsId?: number;
    Name?: string;
    Type?: Int16Array;
}

export interface PartsInstance extends Sequelize.Instance<PartstAttributes>, PartstAttributes { }

export interface PartsModel extends BaseModelInterface, Sequelize.Model<PartsInstance, PartstAttributes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): PartsModel => {

    const Parts: PartsModel =
        sequelize.define('Parts', {
            PartsId: {
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
                tableName: 'Parts',
            });


    Parts.associate = (models: ModelsInterface): void => {
        Parts.belongsToMany(models.Schedule, {
           // as: 'schedule',
            through: 'ScheduleParts',
            foreignKey: 'PartsId',
        })
    }

    return Parts;
};