module.exports = {
    getRandomName: () => {
        let randomnumber = Math.floor((Math.random() * 100) +1);
        return `name${new Date().getTime().toString()}${randomnumber};`
    }
}