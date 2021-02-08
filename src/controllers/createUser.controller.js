export default function makeCreateUser({createUser}){
    return async function postUser(httpRequest){
        try {
            const body = httpRequest.body
            const posted = await createUser(body)
            return{
                header:{
                    'Content-Type' : 'application/json',
                },
                statusCode: 201,
                body: { posted }
            }
        } catch (error) {
            console.log(error)
            return {
                header:{
                    'Content-Type' : 'application/json',
                },
                statusCode: 400,
                body: error.message
            }
        }
    }
}