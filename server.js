const { app } = require("./app");
const { port } = require("./config-keys/config-keys");
const { connectToDataBase } = require("./database-config");
const {
  populatingDatabaseWithSampleData
} = require("./migration-scripts/main-migration-script");

app.listen(port, () => {
  console.log(`server is running on PORT : ${port} :)!!!`);
});

(async () => {
  await connectToDataBase();
  await populatingDatabaseWithSampleData();
})();
