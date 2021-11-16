const sorterPromise = (arr = []) => {
    return new Promise((resolve, reject) => {
        if (arr.every(item =>
                (typeof item === "string"))) {
            resolve((arr.sort()));
        } else {
            reject("Error: Not all elements are string type!");
        }
    });
};

export default sorterPromise;
