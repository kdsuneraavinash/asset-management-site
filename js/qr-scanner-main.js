import QrScanner from "./qr-scanner.min.js";

const video = document.getElementById('qr-video');
const camQrResult = document.getElementById('cam-qr-result');

function setResult(label, result) {
    console.log("Label: " + label);
    console.log("Result: " + result);

}

const scanner = new QrScanner(video, result => setResult(camQrResult, result));
scanner.start();
