import { CommentModel } from "../models/CommentModel";
import { PostModel } from "../models/PostModel";
import { UserModel } from "../models/UserModel";
import { ScheduleModel } from "../models/ScheduleModel";
import { SchedulePermitModel } from "../models/SchedulePermitModel";
import { PermitModel } from "../models/PermitModel";
import { LocationModel } from "../models/LocationModel";
import { SupplierModel } from "../models/SupplierModel";
import { ScheduleSupplierModel } from "../models/ScheduleSupplierModel";
import { EquipmentModel } from "../models/EquipmentModel";
import { PartsModel } from "../models/PartsModel";
import { SchedulePartsModel } from "../models/SchedulePartsModel";
import { ScheduleEquipmentModel } from "../models/ScheduleEquipmentModel";
import { ExecutionModel } from "../models/ExecutionModel";
import { GroupModel } from "../models/GroupModel";
import { ExecutionUserModel } from "../models/ExecutionUserModel";



export interface ModelsInterface {
    Comment: CommentModel; 
    Post: PostModel;
    User: UserModel;
    Schedule: ScheduleModel;
    SchedulePermit: SchedulePermitModel;
    Permit: PermitModel;
    Location: LocationModel;
    Supplier: SupplierModel;
    ScheduleSupplier: ScheduleSupplierModel;
    Equipment: EquipmentModel;
    Parts: PartsModel;
    ScheduleParts: SchedulePartsModel;
    ScheduleEquipment: ScheduleEquipmentModel;
    Execution: ExecutionModel;
    Group: GroupModel;
    ExecutionUser: ExecutionUserModel;
    
}