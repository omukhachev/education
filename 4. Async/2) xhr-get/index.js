function xhrGet(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.responseType = "json";
        xhr.send();
        xhr.onload = () => {
            /^2/.test(xhr.status.toString()) ? resolve(xhr.response) : reject(xhr.response);
        }
    })
}

window.xhrGet = xhrGet;

export default xhrGet;
