const fs = require('fs');

let listTable = (base, limit = 10) => {
    for (let i = 1; i <= limit; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
};

let createFile = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`The value ${base} entered is not a number`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limit; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tables/table-${base}-${limit}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`table-${base}-${limit}.txt`);
            }
        });
    });
};

module.exports = {
    listTable,
    createFile
}