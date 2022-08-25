function isNumber (val) {
    return !((isNaN(val)) || typeof val === "boolean" || val === null || val === undefined);
}
