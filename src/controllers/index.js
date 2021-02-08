import { createUser } from '../useCases'
import makeCreateUser from './createUser.controller'

const addUser = makeCreateUser({createUser})
const userController = { addUser }

export default userController;
export {addUser}