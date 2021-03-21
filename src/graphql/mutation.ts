import { commentMutations } from './resources/comment/comment.schema';
import { postMutations } from './resources/post/post.schema';
import { userMutations } from './resources/user/user.schema';
import { tokenMutations } from './resources/token/token.schema';
import { scheduleMutations } from './resources/schedule/schedule.schema';
import { executionMutations } from './resources/execution/execution.schema';
import { executionUserMutations } from './resources/executeuser/executionuser.schema';

const Mutation = `
    type Mutation {
        ${commentMutations}
        ${postMutations}
        ${tokenMutations}
        ${userMutations}
        ${scheduleMutations}
        ${executionMutations}
        ${executionUserMutations}
    }
`;

export {
    Mutation
}