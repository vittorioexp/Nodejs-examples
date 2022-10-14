// Requiring fs module - fs is used for File I/O
const fs = require('fs');

const filename1 = "courseDetails.json";
const filename2 = "sampleData.json";

function readFile1(filename1) {
    // Reading the file Synchronously - Blocking rest of execution
    const data = fs.readFileSync(filename1);
    console.log("\n\nThe content of the file is \n\n"+data);
    console.log("Completed reading file1");
}

function readFile2(filename2) {
    // Reading the file Synchronously - Blocking rest of execution
    const data = fs.readFileSync(filename2);
    console.log("\n\nThe content of the file is \n\n"+data);
    console.log("Completed reading file2");
}

function writeFile() {
    let dir = './result/writefile';

    // Create folders if they don't exist
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(dir + "/new_file.txt","File created using fs.writeFileSync in Node.js");
    console.log("Completed writing file");
}

console.log('Before reading the file-1');
readFile1(filename1);

console.log('Before reading the file-2');
readFile2(filename2);

console.log('Before writing the file');
writeFile();



console.log('All done!');
