import * as Sequelize from 'sequelize';

import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface ScheduleAttributes {
    ScheduleId?: number;
    DateSold?: Date;
    Address?: string;
    City?: string;
    StateName?: string;
    ZipCode: string;
    GoogleMaps: string;
    CustomerName: string;
    CustomerPhone: string;
    Information: string;
    DateWalkthruSchedule: Date;
    DateWalkthruExecution: Date;
    JobDescription: string;
    Permit: number;
    Supplier: number;
    Parts: number;
    Equipment: number;
    ProjectManager: String;
    WalkInformation: String;
    ConcretePad: number;
    DateConcretePadScheduled: String;
    DateConcretePadScheduledFinish: String;
    DateConcreteStart: String;
    DateConcreteEnd: String;
    PathandPaint: number;
    DatePathandPaintStart: String;
    DatePathandPaintEnd: String
    DateFinalWalkthruScheduled: String;
    ProjectFinalManager: String;
    DateFinalWalkthruExecution: String;
    WalkFinalInformation: String;
}

export interface ScheduleInstance extends Sequelize.Instance<ScheduleAttributes>, ScheduleAttributes { }

export interface ScheduleModel extends BaseModelInterface, Sequelize.Model<ScheduleInstance, ScheduleAttributes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): ScheduleModel => {

    const Schedule: ScheduleModel =
        sequelize.define('Schedule', {
            ScheduleId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            DateSold: {
                type: DataTypes.DATE,
                allowNull: false
            },
            Address: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            City: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            StateName: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            ZipCode: {
                type: DataTypes.STRING(20),
                allowNull: true,
                defaultValue: null
            },
            GoogleMaps: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            CustomerName: {
                type: DataTypes.STRING(155),
                allowNull: false
            },
            CustomerPhone: {
                type: DataTypes.STRING(155),
                allowNull: true
            },
            Information: {
                type: DataTypes.TEXT,
                allowNull: true
            },

            DateWalkthruScheduled: {
                type: DataTypes.DATE,
                allowNull: true
            },
            ProjectManager: {
                type: DataTypes.STRING(155),
                allowNull: true
            },      
            DateWalkthruExecution: {
                type: DataTypes.DATE,
                allowNull: true
            },           
            WalkInformation: {
                type: DataTypes.TEXT,
                allowNull: true
            },

            ConcretePad: {
                type: DataTypes.INTEGER,
                allowNull: true
            },

            DateConcretePadScheduled: {
                type: DataTypes.DATE,
                allowNull: true
            },

            DateConcretePadScheduledFinish: {
                type: DataTypes.DATE,
                allowNull: true
            },

            DateConcreteStart: {
                type: DataTypes.DATE,
                allowNull: true
            },

            DateConcreteEnd: {
                type: DataTypes.DATE,
                allowNull: true
            },

            Permit: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            Supplier: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            Parts: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            Equipment: {
                type: DataTypes.INTEGER,
                allowNull: true
            },

            PathandPaint: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            DatePathandPaintStart: {
                type: DataTypes.DATE,
                allowNull: true
            },
            DatePathandPaintEnd: {
                type: DataTypes.DATE,
                allowNull: true
            },
            DateFinalWalkthruScheduled: {
                type: DataTypes.DATE,
                allowNull: true
            },
            ProjectFinalManager: {
                type: DataTypes.STRING(155),
                allowNull: true
            },      
            DateFinalWalkthruExecution: {
                type: DataTypes.DATE,
                allowNull: true
            },           
            WalkFinalInformation: {
                type: DataTypes.TEXT,
                allowNull: true
            },
        }, {
                tableName: 'Schedule',
            });



    Schedule.associate = (models: ModelsInterface): void => {


        Schedule.belongsToMany(models.Parts, {
            as: 'parts',    
            through: 'ScheduleParts',
            foreignKey: 'ScheduleId',
        })

        Schedule.belongsToMany(models.Permit, {
            as: 'permit',
            through: 'SchedulePermit',
            foreignKey: 'ScheduleId',
        });

        Schedule.belongsToMany(models.Location, {
            as: 'location',
            through: 'ScheduleLocation',
            foreignKey: 'ScheduleId',
        });

        Schedule.belongsToMany(models.Supplier, {
            as: 'supplier',
            through: 'ScheduleSupplier',
            foreignKey: 'ScheduleId',
        });

        Schedule.belongsToMany(models.Equipment, {
            as: 'equipment',
            through: 'ScheduleEquipment',
            foreignKey: 'ScheduleId',
        });

        Schedule.hasMany(models.Execution, {
            foreignKey: 'ScheduleId'
        });

    };


    return Schedule;

};