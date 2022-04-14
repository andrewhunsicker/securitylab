//cipher is letter +3 , z feeds to a. 

const alphabet = ` abcdefghijklmnopqrstuvwxyz`
let newAlpha= ``

const shift = (n) => {
	for (let i = 0; i < alphabet.length; i++){
		let offset = (i + n) % alphabet.length;
		newAlpha += alphabet[offset];
    }
}

function encode(message){
    let result = "";
    message = message.toLowerCase();
    for (let i = 0; i < message.length; i++){
        let index = alphabet.indexOf(message[i]);
        result += newAlpha[index];
    }
    return result;
}

function decode(message){
    let result = "";
    message = message.toLowerCase();
    for (let i = 0; i < message.length; i++){
        let index = newAlpha.indexOf(message[i]);
        result += alphabet[index];
    }
    return result;
}


shift(3)
//console.log(newAlpha)
console.log(encode(`i love to code`))
// console.log(decode(`ldoryhdwrdfrgh`))
