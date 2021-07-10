const { app } = require("./app");
const { port } = require("./config-keys/config-keys");
const { connectToDataBase } = require("./database-config");

app.listen(port, () => {
  console.log(`server is running on PORT : ${port} :)!!!`);
});

(async () => {
  await connectToDataBase();
})();
