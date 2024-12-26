var content = "https://example.com";
var field = {};
field.content = content ? '<a href="' + content + '">' + content + "</a>" : "";

console.log(field.content);
// Output: <a href="https://example.com">https://example.com</a>

content = "";
field.content = content ? '<a href="' + content + '">' + content + "</a>" : "";

console.log(field.content);
// Output: ""
