import util from "util";

const firstName = "Thariq";
const lastName = "Maulana";

console.info(`Namaku adalah ${firstName} ${lastName}`);
console.info(util.format("Namaku adalah %s %s", firstName, lastName));

const person = {
    firstName: "Thariq",
    lastName: "Maulana"
};

console.info(person);
console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j", person));
