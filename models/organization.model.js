import mongoose, { Schema } from "mongoose";

const organizationSchema = new Schema({
    _id: {
        type: String, // Assuming the ID is a string
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    }
);

export const Organization = mongoose.model('Organization', organizationSchema);

