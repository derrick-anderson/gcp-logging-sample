import { logger } from "./loaders/logger";

export const greetings = (person: string): string => {
    return `Hello ${person}. How are you?`;
}