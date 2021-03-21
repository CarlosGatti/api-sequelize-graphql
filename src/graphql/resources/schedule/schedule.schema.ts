const scheduleTypes = `
    type Schedule {
        ScheduleId: String!
        DateSold: String!  
        Address: String!  
        City: String!
        StateName: String!
        ZipCode: String 
        GoogleMaps: String
        CustomerName: String
        CustomerPhone: String  
        Information: String
        DateWalkthruSchedule: String
        ProjectManager: String
        DateWalkthruExecution: String
        WalkInformation: String
        ConcretePad: Int
        DateConcretePadScheduled: String
        DateConcretePadScheduledFinish: String
        DateConcreteStart: String
        DateConcreteEnd: String
        Permit: Int
        Supplier: Int
        Parts: Int
        Equipment: Int
        PathandPaint: Int
        DatePathandPaintStart: String
        DatePathandPaintEnd: String
        DateFinalWalkthruScheduled: String
        ProjectFinalManager: String
        DateFinalWalkthruExecution: String
        WalkFinalInformation: String
        CreatedAt: String! 
        updatedAt: String! 
        parts(first: Int, offset: Int): [ Parts ]
        executions(first: Int, offset: Int): [ Execution ]
    }

    input ScheduleInput {
        DateSold: String!  
        Address: String!  
        City: String!
        StateName: String!
        ZipCode: String 
        GoogleMaps: String
        CustomerName: String
        CustomerPhone: String  
        Information: String
        DateWalkthruSchedule: String
        ProjectManager: String
        DateWalkthruExecution: String
        WalkInformation: String
        ConcretePad: Int
        DateConcretePadScheduled: String
        DateConcretePadScheduledFinish: String
        DateConcreteStart: String
        DateConcreteEnd: String
        Permit: Int
        Supplier: Int
        Parts: Int
        Equipment: Int
        PathandPaint: Int
        DatePathandPaintStart: String
        DatePathandPaintEnd: String
        DateFinalWalkthruScheduled: String
        ProjectFinalManager: String
        DateFinalWalkthruExecution: String
        WalkFinalInformation: String
        ScheduleId: String
    }
`;

const scheduleQueries = `
    schedules(first: Int, offset: Int): [ Schedule! ]!  
    schedule(id: ID!): Schedule
`;

const scheduleMutations = `
    createSchedule(input: ScheduleInput!): Schedule
    updateSchedule(input: ScheduleInput!): Schedule
    deleteSchedule(id: ID!): Boolean
`;

export {
    scheduleTypes,
    scheduleQueries, 
    scheduleMutations
}