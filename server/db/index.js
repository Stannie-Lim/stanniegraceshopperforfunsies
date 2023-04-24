const conn = require("./conn");
const User = require("./User");
const Product = require("./Product");

const { faker } = require("@faker-js/faker");

const syncAndSeed = async () => {
  await conn.sync({ force: true });
  const [moe, lucy, larry, ethyl] = await Promise.all([
    User.create({ username: "moe", password: "123" }),
    User.create({ username: "lucy", password: "123" }),
    User.create({ username: "larry", password: "123" }),
    User.create({ username: "ethyl", password: "123" }),
  ]);

  await Promise.all(
    Array(100)
      .fill()
      .map((_, i) =>
        Product.create({
          name: faker.commerce.product(),
          description: faker.commerce.productDescription(),
          price: faker.commerce.price(),
        })
      )
  );

  await conn.close();
  return {
    users: {
      moe,
      lucy,
      larry,
    },
  };
};

module.exports = {
  syncAndSeed,
  User,
  Product,
};
