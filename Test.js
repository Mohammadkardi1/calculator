// let str = "###Hello World";
// let symbol = /#/g;
// let newStr = str.replace(symbol, "");
// console.log(newStr); // output: "Hello World"

const x = '3'


const getNumber = () => {
    switch (x) {
        case '1' :
            return "number one"
        case '2': 
            return 'number two'
        case '3':
            return 'number three '
        default: 
            console.log('')
    }
}


console.log(getNumber())