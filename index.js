const produce = require("./produce");
const consume = require("./consume");

produce()
// .catch((err) => {
//   console.error("error in producer: ", err);
// });

consume()
// .catch((err) => {
//   console.error("error in consumer: ", err);
// });
