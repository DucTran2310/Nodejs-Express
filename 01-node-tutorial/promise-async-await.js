const { readFile, writeFile } = require("fs");

const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const first = await readFilePromise("./content/first.txt", "utf-8");
        const second = await readFilePromise("./content/second.txt", "utf-8");
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
};

start();

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, "utf-8", (err, data) => {
//             if (err) {
//                 reject;
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// };

// getText("./content/first.txt")
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));
