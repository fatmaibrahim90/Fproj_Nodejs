const User = require('../models/User');


// TO make Register of The User
const Register = async (_username, _password, _firstname, _date) => {
    try {

        let userdata = await User.create({ username: _username, password: _password, firstname: _firstname, date: _date })
        console.log(userdata)
        if (userdata) {
            console.log("User was registered successfully ^_^");
            return userdata;
        }
        else {
            console.log("Sorry ! ERROR");
        }
    } catch (error) {
        console.log(error);

    }
}


// TO make LogIn in The Todo
const Login = async ( _username,_password ) => {
    try {
        let userdata =  await User.find({ username: _username, password: _password });
        if (userdata.length > 0) {
            console.log("Logged in successfully  ^_^");
        }
        else {
            console.log("error:”Invalid Credentials” ")
        }
    }
    catch (error) {
        console.log(error);
    }


}


// TO get Users 
const ShowUser = async  () => {

    try {
        let userdata = await User.find({},"firstname");
        if (userdata) {
            return userdata;
            // console.log(userdata);
        }
    }
    catch (error) {
        console.log(error);
    }

}


// to delete User
const DeleteUser = async (_username) => {

    try {
        let userdata = await User.findOneAndDelete({ username: _username })
        console.log(userdata)
        if (userdata) {
            console.log("Successfully deleted  ^_^");
            return  userdata;
          }
    }
    catch (error) {
        console.log(error);
    }

}

module.exports = {Register, Login, ShowUser, DeleteUser};