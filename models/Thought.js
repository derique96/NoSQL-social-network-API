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
            type: Date,
            timestamp: true,
            defaut: Date.now,
            get: (date) => timeSince(date),
        },
        username: {
            type: 'String',
            required: true,
        },
        reactions: [reactionSchema],

    },
    {
        toJSON: { getters: true, virtuals: true },
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});




const Thought = model('thought', thoughtSchema);  
module.exports = Thought;