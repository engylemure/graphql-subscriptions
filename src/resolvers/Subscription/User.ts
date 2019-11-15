
import {subscriptionField} from "nexus";

export const userSubscription = subscriptionField('userSubscription', {
    type: 'User',
    subscribe: (parent, args, ctx) => {
        return ctx.prisma.$subscribe.user({
            mutation_in: ["CREATED", "UPDATED"]
        })
    },
    resolve: (parent, args, ctx) => {
        return parent.node
    }
});