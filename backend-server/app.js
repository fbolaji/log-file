const express = require("express");

const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 3001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIo(server);

let interval;

io.on("connection", (socket) => {
	console.log("New client connected");
	if (interval) {
		clearInterval(interval);
	}
	interval = setInterval(() => getApiAndEmit(socket), 2000);
	socket.on("disconnect", () => {
		console.log("Client disconnected");
		clearInterval(interval);
	});
});

const getApiAndEmit = socket => {
	const dataTime = new Date();
	const severity = ["INFO", "WARNING", "ERROR"];
	const randomType = severity[Math.floor(Math.random() * severity.length | 0)];
	const uuid = Math.floor(dataTime.getTime() + (Math.random() * 1000 /16));
	const responseData = {
		"id": uuid,
		"date":  dataTime,
		"severity": randomType,
		"message": `Some ${randomType} message`
	};
	// Emitting a new message. Will be consumed by the client
	socket.emit("FromAPI", responseData);
};

server.listen(port, () => console.log(`Listening on port ${port}`));