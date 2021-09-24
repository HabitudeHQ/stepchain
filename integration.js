

var obj = {
    function: "integration",
    params: {
        key1_t: "abc",
        key2_t: "abc",
        key3_n: 1,
        key4_n: 5
    }
};

var input = JSON.stringify(obj);
console.log(input);

var obj = JSON.parse(input);

var keys_text = [], values_text = [], keys_number = [], values_number = [];

for (var k in obj.params) {

    if (typeof obj.params[k] === "string") {
        keys_text.push(k);
        values_text.push(obj.params[k]);
    }
    else if (typeof obj.params[k] === "number"){
        keys_number.push(k);
        values_number.push(obj.params[k]);
    }

}

console.log(keys_text);
console.log(values_text);
console.log(keys_number);
console.log(values_number);