function stringToType(str) {
    switch (str) {
        case "null":
            return null;
        case "undefined":
            return undefined;
        case "true":
            return true;
        case "false":
            return false;
        case "":
            return "";
    }

    if (!isNaN(Number(str))) {
        return Number(str);
    }

    return str;
}

window.stringToType = stringToType;

export default stringToType;
