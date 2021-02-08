import makeUser from '../user'

export default function makeAddUser({ userDb }) {
    return async function addUser(userData) {
        const user = makeUser(userData.name, userData.email, userData.country);

        const exists = await userDb.findUser(userData);
        if (exists) throw new Error('user already exists')

        return userDb.addUser(user)
    }
}