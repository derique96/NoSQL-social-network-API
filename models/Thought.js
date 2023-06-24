const {Schema, model} = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            timestamp: true,
            defaut: Date.now
        }

    }
);


const Thought = model('thought', thoughtSchema);
module.exports = Thought;