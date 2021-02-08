export default function userDb({userModel}){
    async function addUser(user){
        const addNewUser = new userModel(user)
        const saveNewUser = await addNewUser.save();

        return saveNewUser;
    }   

    async function findUser(user){
        return false
    }

    return Object.freeze({
        addUser,
        findUser
    })
}