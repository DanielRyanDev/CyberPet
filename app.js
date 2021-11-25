import inquirer from "inquirer"
import { animal } from "./classes.js"

const cyberPet = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "Player Name",
                message: "Please tell us your name: "
            },
            {
                type: "list",
                name: "Pet Select",
                message: "Time to create your Cyber Pet! Select from the options below:",
                choices: ["Cat", "Dog", "Parrot", "Rabbit"],
            },
            {
                type: "input",
                name: "Pet Name",
                message: "What is your pet's name?"
            },
            {
                type: "input",
                name: "Pet Age",
                message: "Finally, how old is your pet?"
            },
        ])
        .then((answers) => {
            console.table(answers)
        })
        .then(() => gameLoop())
}

const gameLoop = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "Player Choice",
                message: "What would you like to do with your pet?",
                choices: ["Feed", "Drink", "Play", "Rest", "Toilet", "Bathe", "Sleep", "Ignore"],
            },
        ])
        .then((answers) => {
            let mypet = answers
            console.table(answers)
        })
        .then(() => gameLoop())
}

cyberPet()


