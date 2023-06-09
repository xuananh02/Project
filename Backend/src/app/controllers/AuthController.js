const Admin = require('../models/admin');
const { mongooseToObject, multipleMongooseToObject } = require('../../utils/mongoose.js');

class AuthController {

    // [POST] /auth/login
    async loginAdmin(req, res) {
        try {
            const username = req.body.username;
            const password = req.body.password;
            
            const user = await Admin.findOne({username})
            if(!user) {
                res.json({ message: 'Wrong username', status: 404 });
            }

            const validPassword = await password === user.password;
            if(!validPassword) {
                res.json({ message: 'Wrong password', status: 404 });
            }

            if(user && validPassword) {
                res.json({ user, status: 200 });
            }
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = new AuthController;