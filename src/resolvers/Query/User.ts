import {queryField} from "nexus";

export const users = queryField('users', {
    type: 'User',
    list: true,
    resolve: async (parent, args, ctx) => {
        return ctx.prisma.users()
    }
});