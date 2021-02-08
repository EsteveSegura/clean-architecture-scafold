import makeAddUser from './createUser.useCase'
import userDb from '../dataAccess'

const createUser = makeAddUser({ userDb });

const userService = { createUser }

export default userService
export { createUser }