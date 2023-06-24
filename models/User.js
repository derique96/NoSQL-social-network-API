const {Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match:  [/.+Q.+\..+/, 'Must match an email address!'],
            _id: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'Thought',
                },
            ],
        },
        friends: {
            _id: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'User',
                },
            ],
        },
        

    },
);

userSchema.virtual('friendCount').get(function(){
    return this.friends.length
});


const User = model('user', userSchema);

module.exports = User;