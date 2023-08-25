const serverModel = require("../model/App.Model");
class appController {
  /**
   * @method: To getRegistration
   */
  async getRegistration(req, res) {
    try {
      req.body.image = req.file.filename;
      let data = await serverModel.create(req.body);
      if (data && data._id) {
        console.log(data);
        console.log("Registered successfully");
        return res.status(200).json({
          message: "Registration Successfully...!",
        });
      } else {
        console.log("Failed to register");
        return res.status(400).json({
          message: "Registration failled...!",
        });
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  /**
   * @method: To getLogIn
   */
  async getLogIn(req, res) {
    try {
      let isEmailExists = await serverModel.findOne({
        email: req.body.email,
        password: req.body.password,
      });

      if (isEmailExists) {
        console.log(isEmailExists);
        console.log("LogIn Sucessfully");
        return res.status(200).json({
          message: "Login Sucessfully....!",
        });
      } else {
        console.log("Login Failled");
        return res.status(400).json({
          message: "Login Failled...!",
        });
      }
    } catch (err) {
      throw err;
    }
  }
  /**
   * @method:Data-Fetch
   */
  async fetchData(req, res) {
    try {
      let allAdmindata = await serverModel.find();
      return res.status(200).json({
        message: "Data fetched Successfully",
        data: allAdmindata,
      });
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new appController();
