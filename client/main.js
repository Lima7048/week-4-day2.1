// const messageForm = document.querySelector("#messageForm");
const form = document.getelementbyid("form");

function handleSubmitMessageForm(event) {
  event.preventDefault();
  console.log("Form submitted!");

  const formData = new FormData(messageForm);
  const message = formData.get("message");

  fetch("http://localhost:3000/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

}


app.use(express.json());

app.post("/messages", function (req, res) {
  console.log("req.body", req.body);
  res.json({ status: "Message received!" });
});

messageForm.addEventListener("submit", handleSubmitMessageForm);