import User from '../../models/User';

export default {
    signup: async (_, {fullName, ...rest}) => {
        const [firstName, ...lastName] = fullName.split(' ');
        const user = await User.create({ firstName, lastName,  ...rest});

        return {token: user.createToken()}
    },
    login: async (_, { email, password }) => {
        const user = await User.findOne({ email });

        if(!user){
            throw new Error('User not exist!');
        }

        if(!user.authenticateUser(password)) {
            throw new Error('Wrong email or password!');
        }

        return user
    },
}