FROM node:13.1-alpine

COPY . /src/
ENV PRISMA_ENDPOINT http://prisma:3333
ENV APP_NAME graphql_subscriptions
ENV STAGE qa

WORKDIR /src

RUN apk add --update git ca-certificates && \
    rm -rf /var/cache/apk/* && \
    yarn global add prisma@1.32.2 && \
    yarn && \
    yarn clean && \
    yarn prisma:generate && \
    yarn compile && \
    yarn tsc

CMD ["yarn", "start"]