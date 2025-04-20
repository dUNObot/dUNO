const chalk = require('chalk');
const figlet = require('figlet');

const displayAsciiArt = () => {
  const dUNOGradient = chalk.redBright.bold.bgBlack(' d') +
                       chalk.yellowBright.bold.bgBlack(' U') +
                       chalk.greenBright.bold.bgBlack(' N') +
                       chalk.blueBright.bold.bgBlack(' O');

  console.log(chalk.whiteBright('\n⎯⎯⎯ dUNO STATUS ⎯⎯⎯'));
  console.log(chalk.cyanBright('🎮 dUNO is now live on Discord!'));

  figlet.text('dUNO', { font: 'ANSI Shadow' }, (err, data) => {
    if (err) {
      console.error(chalk.red.bold('💥 Figlet failed to generate art:'));
      console.dir(err);
      return;
    }

    const lines = data.split('\n');
    const colors = [chalk.redBright, chalk.yellowBright, chalk.greenBright, chalk.blueBright];

    const colorized = lines
      .map((line, i) => colors[i % colors.length](line))
      .join('\n');

    console.log(colorized + '\n');
  });
};

module.exports = displayAsciiArt;
