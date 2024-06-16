const rest = () => {
    console.log("You should have a rest :3");
}
const minRest = () => {
    setInterval(rest, 2400000);
}
//minRest();
module.exports = { minRest };

