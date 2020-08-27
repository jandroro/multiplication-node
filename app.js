const { argv } = require('./config/yargs');
const { listTable, createFile } = require('./multiply/multiply');
const colors = require('colors/safe');

// To get the commands that I passed to my file when I called it, I go through the array '_' of the object emitted by yargs and get the first element
let commandEnt = argv._[0];

switch(commandEnt) {
    case 'list':
        listTable(argv.base, argv.limit);
        break;
    case 'create':
        createFile(argv.base, argv.limit)
            .then(myFile => console.log(`Created file: ${colors.green(myFile)}`))
            .catch(e => console.log(e));
        
        break;
    default:
        console.log(colors.red('Command not recognized'));
        break;
}