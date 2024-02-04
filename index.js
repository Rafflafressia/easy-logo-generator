// TODO Include packages required to run this application
// TODO Create a list of questions to get user input
const questions = [
    {
        type: "input",
        name: "lgname",
        message: "Type in a 3 character name or acryonym for your logo: "
    },
    {
        type: "input",
        name: "txtcolor",
        message: "What color should your text be?: "
    },
    {
        type: "list",
        name: "shape",
        message: "Please select a shape: ",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "svgcolor",
        message: "What color should your shape be?: "
    }
];  
// TODO Create test cases for each shape that returns if the shape created is true according to user input
// TODO Write a Function that initializes the app
// TODO Initialize App