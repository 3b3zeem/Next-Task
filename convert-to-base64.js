const stringToConvert = "Pj3Tlp7nQbsDHhXpB1q6kXn1Ka6quWXH"; // استبدل هذا بالسلسلة الناتجة
const base64String = Buffer.from(stringToConvert).toString("base64");
console.log(base64String);