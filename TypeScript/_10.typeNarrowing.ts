

function printIdFn(id:string|number) {
    if(typeof id === 'string'){
         console.log(`id is a string:`,id.toUpperCase())
    }else {
        console.log(`id is a number: ${id}`);
    }
}
printIdFn(324);