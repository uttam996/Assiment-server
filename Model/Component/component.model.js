const mongoose = require('mongoose');

const { Schema,model } = mongoose;

const componentSchema =  Schema({
    componentName: {
        type: String,
        required: true,
    },
    data: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: true,
    },

}, { timestamps: true });

module.exports = model('Component', componentSchema);
