import * as Sequelize from 'sequelize';

import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface LocationAttributes {
    LocationId?: number;
    Type?: string;
}

export interface LocationInstance extends Sequelize.Instance<LocationAttributes>, LocationAttributes { }

export interface LocationModel extends BaseModelInterface, Sequelize.Model<LocationInstance, LocationAttributes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): LocationModel => {

    const Location: LocationModel =
        sequelize.define('Location', {
            LocationId: {
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
                tableName: 'Location',
            });


    Location.associate = (models: ModelsInterface): void => {
        Location.belongsToMany(models.Schedule, {
            through: 'ScheduleLocation',
            foreignKey: 'LocationId',
        })
    }
           
        return Location;
};