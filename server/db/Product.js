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
  imageURL: {
    type: TEXT,
    defaultValue:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png",
  },
});

module.exports = Product;
