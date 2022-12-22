function SaveToServer(Name, email, message, finalMessage, response) {
  const MongoURL = require('../Server/DB_Config.js')
  const SaveData = require("../Other Services/saveData");
  let status = {
    success: "Your Request Successfully Saved To Our Database",
    fail: "Currently Server not acceping request, Try again later ...",
  };
  let mongoose = require("mongoose");
  let url = MongoURL;
  let MongoModel = require("../Server/MongoModel");
  mongoose
    .connect(url)
    .then(() => {
      //Insert Data to Final
      let FinalScheema = {
        name: Name,
        Email: email,
        Message: message,
        FinalMessage: finalMessage,
        RequestDate: new Date(),
      };
      let FinalData = new MongoModel.Request(FinalScheema);
      FinalData.save()
        .then(() => {
          SaveData.SaveJSON(Name, finalMessage);
          response.json({ status: status.success });
          mongoose.connection
            .close()
        })
        .catch((error) => {
          response.json({ status: status.fail });
        });
    })
    .catch((error) => {
      response.json({ status: status.fail });
    });
}
module.exports.SaveToServer = SaveToServer;
