import Express from 'express';
import { createServer } from 'http';

import './config/db';
import constants from './config/constants';
import middlewares from './config/middlewares';

import mocks from './mocks';

const app = Express();

middlewares(app);

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

