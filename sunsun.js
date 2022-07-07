const date = new Date();
let month = date.getMonth() + 1
const format = date.getFullYear() + "/" + month + "/" + date.getDate();

document.querySelector('h3').innerHTML = format;
