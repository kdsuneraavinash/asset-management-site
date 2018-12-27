import QrScanner from "./qr-scanner.js";

function setResult(result) {
    console.log("Result: " + result);
    $('#cam-qr-result').val(result);
    $('#qr-submit').prop('disabled', false);

}

$("#inputGroupFile").on("change", function (v) {
    const file = this.files[0];
    if (!file) {
        return;
    }
    QrScanner.scanImage(file)
        .then(result => setResult(fileQrResult, result))
        .catch(e => setResult(e || 'No QR code found.'));
})
