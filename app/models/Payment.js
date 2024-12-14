import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PaymentSchema = new Schema({
    name: String,
    email: String,
    amount: Number,
    done: Boolean,
    id: String,
});


export default mongoose.models.Payment || mongoose.model('Payment', PaymentSchema);
