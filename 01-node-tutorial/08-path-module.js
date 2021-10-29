const path = require("path");

// Biểu thị File Separator của nền tảng cụ thể. Nó có thể là '\\' hoặc '/'.
console.log(path.sep);

// Kết hợp tất cả các tham số là đường dẫn với nhau và sau đó chuẩn hóa đường dẫn kết quả tạo ra
const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);

// Trả về phần cuối cùng của một đường dẫn
const base = path.basename(filePath);
console.log(base);

// Resolve một đường dẫn tuyệt đối.
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
