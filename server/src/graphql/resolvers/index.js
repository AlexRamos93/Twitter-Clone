import GraphQLDate from 'graphql-date';

import TweetResolvers from './tweet-resolvers';
import UserResolvers from './user-resolvers';
import User from '../../models/User';

export default {
    Date: GraphQLDate,
    Query: {
        getTweet: TweetResolvers.getTweet,
        getTweets: TweetResolvers.getTweets,
    },
    Mutation: {
        createTweet: TweetResolvers.createTweet,
        updateTweet: TweetResolvers.updateTweet,
        deleteTweet: TweetResolvers.deleteTweet,
        signup: UserResolvers.signup,
        login: UserResolvers.login,
    }
}