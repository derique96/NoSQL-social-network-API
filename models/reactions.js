const {Schema} = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            
        },
        reactionBody: {
            type: 'String',
            required: true,
            maxLength: 280,
        },
        username: {
            type: 'String',
            required: true,
        },
        createdAt: {
            type: Date,
            timestamp: true,
            defaut: Date.now,
            get: (date) => timeSince(date),
        },
    },
    {
        toJSON: { getters: true, virtuals: true },
    },
);


module.exports = reactionSchema;