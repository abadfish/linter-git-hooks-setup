const askQuestionSet = require("./askQuestionSet")


if(new Date().getFullYear() > 2021) {
    askQuestionSet()
}

const user = {
    jobTitle: "product owner"
}

// Syntax and style errors to be reported by linter
if (user.jobTitle = "manager") {
    // user.jobTitle is now incorrect
}