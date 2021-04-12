import { Request, Response, Express } from 'express';
import { logger } from './loaders/logger';
const express = require('express');
const app = express();
const port = 8080;

app.get('/greeting/:person', (req:Request, res:Response) => {
    return res.status(200).json({
        greeting: greetings(req.params.person)
    });
});

app.listen(port);

export const greetings = (name: string): string => {
    logger.info(`Recieved greeting request.`);
    logger.debug(`Name Parameter Recieved: "${name}"`);
    logger.silly(`Returned: "${`Hello ${name}. How are you?`}"`)
    return `Hello ${name}. How are you?`;
}