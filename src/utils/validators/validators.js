export let required = value => {
    if (value) return undefined;
    return "Field is required";
}

export let minLenghtCreator = minLenght => value => {
    if (value.length < minLenght) return `Min length is ${minLenght} symbols`;
    return undefined;
}

