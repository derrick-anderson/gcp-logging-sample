import { logger } from "./loaders/logger";

export const greetings = (person: string): string => {
    return `Hello ${person}. How are you?`;
}

let user = "Jane";

logger.info(greetings(user));