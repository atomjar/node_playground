const moment = require('moment');
const chalk = require('chalk');

function dateFactor() {
  console.log("It is " + chalk.blue(`${moment().format()}`) +".");
  console.log("It is the" + chalk.magenta(` ${moment().dayOfYear()}th `) +"day of the year.");
  console.log("It is " + chalk.cyan(moment().diff(moment().startOf('day'), 'seconds')) +" seconds into the day.");
  if (moment().isDST()) {
    console.log("It " + chalk.green("is ") + "during Daylight Savings Time.");
  }
  if (!moment().isLeapYear()) {
    console.log("It " + chalk.red("is not ") + "a leap year.");
  }
}

dateFactor();
