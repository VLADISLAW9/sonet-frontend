import { stackMiddlewares, withUser } from '@/shared/middlewares';

const middlewares = [withUser];
export default stackMiddlewares(middlewares);
