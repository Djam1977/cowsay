const info = require("./information")
let cowsay = require("cowsay");

console.log(cowsay.say({
    text : `I'm ${info.student.myName} "from" ${info.student.campus}`,
    e : "oO",
    T : "U "
}));