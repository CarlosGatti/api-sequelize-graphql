import { commentQueries } from './resources/comment/comment.schema';
import { postQueries } from './resources/post/post.schema';
import { userQueries } from './resources/user/user.schema';
import { scheduleQueries } from './resources/schedule/schedule.schema';
import { partsQueries } from './resources/parts/parts.schema';
import { executionQueries } from './resources/execution/execution.schema';
import { groupsQueries } from './resources/group/group.schema';
import { permitsQueries } from './resources/permit/permit.schema';
import { suppliersQueries } from './resources/supplier/supplier.schema';

const Query = `
    type Query {
        ${commentQueries}
        ${postQueries}
        ${userQueries}
        ${scheduleQueries}
        ${partsQueries}
        ${executionQueries}
        ${groupsQueries}
        ${permitsQueries}
        ${suppliersQueries}
    }
`;

export {
    Query
}