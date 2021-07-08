const os = require('os');
var path = require('path');


function sayHelloUser(user) {
    const curHour = new Date().getHours();
    switch (true) {
        case (curHour <= 5 || curHour >= 23):
            return `Good night ${user}`;
        case (curHour <= 12):
            return `Good morning ${user}`;
        case (curHour <= 18):
            return `Good day ${user}`;
        case (curHour < 23):
            return `Good evening ${user}`;
    }
}

function task1() {


    return `
    <h2>System information</h2>
    <br>
    Current user name: ${os.userInfo().username}<br>
    OS type: ${os.type() }<br>
    System work tyme: ${os.uptime() /  60 } minutes <br>
    Current  work directory:  ${process.cwd()} <br>
    Server file name: ${path.basename(__filename)}
    `
}

function task2(){

    return `
    Date of request: ${new Date()} <br>
    ${sayHelloUser(os.userInfo().username)}
    `
}

module.exports = {
    sayHelloUser,
    task1,
    task2

}
