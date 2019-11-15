import {mutationField, stringArg} from "nexus";
import {hash} from "bcryptjs";

export const register = mutationField('register', {
    type: 'User',
    args: {
        username: stringArg({required: true}),
        email: stringArg({required: true}),
        password: stringArg({required: true}),
    },
    resolve: async (parent, {username, email, password}, ctx) => {
        const hashedPassword = await hash(password, 10);
        try {
            return await ctx.prisma.createUser({username, password: hashedPassword, email})
        } catch (e) {
            throw new Error('Could not Create this User')
        }
    }
});