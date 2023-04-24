const conn = require("./conn");
const { STRING, UUID, UUIDV4, TEXT, BOOLEAN, DECIMAL } = conn.Sequelize;

const Product = conn.define("product", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  price: {
    type: DECIMAL,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Product;
