function askQuestionSet(){
    const name = prompt("What is your name ?")
    const age = prompt("How old are you")

    alert(`
        Your data is now processed:
         - Name: ${name}
         - Age: ${age}
    `)
}


module.exports = askQuestionSet;
