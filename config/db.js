let live = true
module.exports = {
    url: live ? 'mongodb+srv://srinivasan:batman%40123@practice.p2n1nrj.mongodb.net/' : 'mongodb://127.0.0.1/srinivasan',
    hostname: live ? '0.0.0.0' : "localhost",
    port: "5020"
}

