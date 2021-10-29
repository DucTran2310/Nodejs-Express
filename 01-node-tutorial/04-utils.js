const sayHi = (name) => {
    console.log(`Hello there ${name}`);
};
// export default
module.exports = sayHi;

const utils = new Utils(); // Khởi tạo
// combineArray(arrays)
// Sử dụng như concat trong es5, convert nhieu array tro thanh mot array

console.log(utils.combineArray([123], [1234], ["a"], ["b"])); // return [123, 1234, "a", "b"]

// compactArray(arrays)
// Loại bỏ những giá trị khong phu hop trong array
console.log(utils.compactArray(["", 0, 3, false, 6, 8, -1])); // return [3, 6, 8, -1]

//containsArray(arrays)
// Tim item trong array return true, false
console.log(utils.containsArray(["1", 3, false, 6, 8, -1, "anony"], "anony")); // return true

//differenceArray(arrays)
// tim nhung item khong co trong array khac
console.log(utils.differenceArray([1, 2, 4, 6], [1, 2, 8], [4, 9])); // return 6

//mergeObject(objects)
// add nhieu object thanh mot object moi
console.log(utils.mergeObject({ type: "blog" }, { name: "anonystick.com" })); //return {type: "blog", name: "anonystick.com"}

//getValuesObject(object)
//return mot array bao gom nhung giatri, tu mot object

console.log(utils.getValuesObject({ type: "blog", name: "anonystick.com" })); // return ["blog", "anonystick.com"]
