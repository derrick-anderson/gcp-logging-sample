import { createLogger, format, transports } from 'winston';
import { LoggingWinston } from '@google-cloud/logging-winston';
const { combine } = format;
let gcpLogger = new LoggingWinston();

export const logger = createLogger({
    level: 'silly',
    defaultMeta: { service: 'gcp-logging' },
});

if(process.env.NODE_ENV != 'production'){
    logger.add( new transports.Console({
        format: combine(
            format.timestamp(),
            format.printf((info) => {
                return `${info.timestamp} [${info.level}] ${info.service} : ${info.message}`;
            })
        )
    }));
} else {
    logger.add(gcpLogger);
}