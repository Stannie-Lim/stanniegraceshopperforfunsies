const conn = require("./conn");
const { STRING, UUID, UUIDV4, TEXT, BOOLEAN, DECIMAL } = conn.Sequelize;

const Order = conn.define("order", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  isCart: {
    type: BOOLEAN,
    defaultValue: true,
  },
  userId: {
    type: UUID,
    allowNull: false,
  },
});

module.exports = Order;
