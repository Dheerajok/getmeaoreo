import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    name: { type: String, default: "" },
    email: { type: String, required: true },
    tagline: { type: String, default: "" },
    stripeID: { type: String, default: "" },
    stripeSecrat: { type: String, default: "" },
    donerArr: { type: Array, default: [] },
    urlName: { type: String, default: "" }
});


export default mongoose.models.User || mongoose.model('User', UserSchema);
