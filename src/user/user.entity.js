export default function buildMakeUser({ sanitize }){
    return function makeUser(name,email,country){

        if(!name) throw new Error('name not present');
        if(!email) throw new Error('email not present');
        if(!country || country.length > 3) throw new Error('country error');

        const updatedAt = Date.now()
        const sanitizedName = sanitize(name).trim()

        return{
            sanitizedName,
            email,
            country,
            updatedAt
        }
    }
}