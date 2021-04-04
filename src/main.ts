export const greeter = (person: string): string => {
    return "Hello, " + person;
}

let user = "Jane";

console.log(greeter(user));