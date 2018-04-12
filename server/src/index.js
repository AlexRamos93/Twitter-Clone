import Express from 'express';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import bodyParser from 'body-parser';

import './config/db';
import constants from './config/constants';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import { createServer } from 'http';
import mocks from './mocks';

const app = Express();

app.use(bodyParser.json());

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

app.use('/graphiql', graphiqlExpress({
    endpointURL: constants.GRAPHQL_PATH
}));

app.use(constants.GRAPHQL_PATH, graphqlExpress({
    schema
}));

const graphQLServer = createServer(app);

mocks().then(() => {
    graphQLServer.listen(constants.PORT, err => {
        if(err){
            console.log(err);
        } else {
            console.log(`Listening in port ${constants.PORT}`);
        }
    });
});

