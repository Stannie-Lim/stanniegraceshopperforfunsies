const conn = require("./conn");
const { STRING, UUID, UUIDV4, TEXT, BOOLEAN, DECIMAL, INTEGER } =
  conn.Sequelize;

const LineItem = conn.define("lineItem", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  quantity: {
    type: INTEGER,
    defaultValue: 1,
  },
  productId: {
    type: UUID,
    allowNull: false,
  },
  orderId: {
    type: UUID,
    allowNull: false,
  },
});

module.exports = LineItem;
