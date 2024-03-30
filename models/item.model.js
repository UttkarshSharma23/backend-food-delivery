import mongoose, { Schema } from "mongoose";

const itemSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    }
);

export const Item = mongoose.model('Item', itemSchema);

