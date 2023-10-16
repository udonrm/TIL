import fs from "fs";
import util from "util";

const promisifyReadFile = util.promisify(fs.readFile);

function main() {
  const readFilePromise = promisifyReadFile("package.json");

  readFilePromise.then((data) => {
    const fileContent = data.toString();
    console.log(fileContent);
  });

  let fileContent: string = "Not loaded";

  fs.readFile("package.json", (err, data) => {
    fileContent = data.toString();
    console.log(fileContent);
  });

  console.log(fileContent);
}

main();
