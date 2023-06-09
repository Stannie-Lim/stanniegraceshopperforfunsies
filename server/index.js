const app = require("./app");
const { syncAndSeed } = require("./db");

const init = async () => {
  try {
    const port = process.env.PORT || 4000;
    const server = app.listen(port, () =>
      console.log(`listening on port ${port}`)
    );
  } catch (ex) {
    console.log(ex);
  }
};

init();
