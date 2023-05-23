import mongoose from "mongoose";

//schema can't be name switch
const swtichSchema = mongoose.Schema({
  switchOne: {
    type: Boolean,
  },
  switchTwo: {
    type: Boolean,
  },
  switchThree: {
    type: Boolean,
  },
  switchFour: {
    type: Boolean,
  },
});

const swtich = mongoose.model("swtich", swtichSchema);

export default swtich;
