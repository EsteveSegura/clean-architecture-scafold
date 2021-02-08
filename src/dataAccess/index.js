import userDb from './user.db'
import mongoose from 'mongoose';
import userModel from './models/user.model';

mongoose.connect('mongodb://localhost/testCleanArch',{ useNewUrlParser : true, useUnifiedTopology:true, useFindAndModify: false})
    .then(() => console.log("OK"))
    .catch((err) => console.log(error))


const makeUserDb = userDb({userModel})
export default makeUserDb