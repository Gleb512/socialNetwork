export const required = (value) =>{
    if(value) return undefined;
    return "Field if required ";
}

export const maxLengthCreator = (maxLength) => (value) =>{
    if(value.length > maxLength) return `Max lenth is ${maxLength} symbols`;
    return undefined;
}