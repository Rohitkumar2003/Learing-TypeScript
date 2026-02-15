// ! Never Type

function infiniteLoop() : never {
    while(true) {
        console.log(1);
    }
}

// infiniteLoop(){

function throwErr(message:string) :never  {
    throw new Error(message);
}

// throwErr('Something went wrong')
