import express from "express"
import cors from "cors"
const app = express();

app.use(cors());
app.use(express.json());

app.listen("3000", () => {
    console.log("server is working on port 3000");
})

app.post("/messages", function (req, res) {
    console.log("req.body", req.body);
    res.json({ status: "Message received!" });
});

