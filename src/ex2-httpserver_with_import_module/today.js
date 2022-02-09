module.exports.getDate = function getDate() {
    let aestTime = new Date().toLocaleString("it-IT");
    return new Date(aestTime);
}