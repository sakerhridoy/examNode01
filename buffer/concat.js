const buf1 = Buffer.from('Hello ');
const buf2 = Buffer.from('Node');

const result = Buffer.concat([buf1, buf2]);
console.log(result.toString());
