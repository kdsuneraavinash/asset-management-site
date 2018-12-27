import QrScanner from "./qr-scanner.js";

function setResult(result) {
    console.log("Result: " + result);
    $('#cam-qr-result').val(result);
    $('#qr-submit').prop('disabled', false);

}

const video = document.getElementById('qr-video');
const scanner = new QrScanner(video, result => setResult(result));
scanner.start();
