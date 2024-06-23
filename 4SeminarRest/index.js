const express = require('express');
const fs = require('fs');
const file = fs.readFileSync("./usersBd.txt", "utf8");
const usersJs = [];
usersJs.push(JSON.parse(file));

const app = express();
app.use(express.json());
let userID = 0;

app.get('/users', (req, res) => {
    res.send({ usersJs });
});
app.get('/users/:id', (req, res) => {
    const user = usersJs.find(user => user.id === Number(req.params.id));
    if (user) {
        res.send(user);
    }
    else {
        res.status(404);
        res.send({ user: null });
    }
})
app.listen(3000);
app.post('/users', (req, res) => {
    userID++;
    usersJs.push({
        id: userID,
        ...req.body
    });
    fs.writeFileSync("./usersBd.txt", JSON.stringify(usersJs));
    res.send({ usersJs });
})
app.put('/users/:id', (req, res) => {
    const user = usersJs.find(user => user.id === Number(req.params.id));
    if (user) {
        user.name = req.body.name;
        fs.writeFileSync("./usersBd.txt", JSON.stringify(usersJs));
        res.send({ usersJs });

    }
    else {
        res.status(404);
        res.send({ user: null });
    }
});
app.delete('/users/:id', (req, res) => {
    const user = usersJs.find(user => user.id === Number(req.params.id));
    if (user) {
        const userIndex = usersJs.indexOf(user);
        usersJs.splice(userIndex, 1);
        res.send(user);

    }
    else {
        res.status(404);
        res.send({ user: null });
    }
})