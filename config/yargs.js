const opts = {
    base: {
        demand: true,
        alias: 'b'
    }, 
    limit: {
        alias: 'l', 
        default: 10
    }
};

const argv = require('yargs')
    .command('list', 'Print the multiplication table on the console', opts)
    .command('create', 'Create a file with the multiplication table', opts)
    .help()
    .argv;

module.exports = {
    argv
}