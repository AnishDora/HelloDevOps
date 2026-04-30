import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  const loadMessages = () => {
    fetch("/api/messages")
      .then((res) => res.json())
      .then((data) => setMessage(JSON.stringify(data)))
      .catch(() => setMessage("API failed..."));
  };

  const addMessage = () => {
    fetch("/api/messages", {
      method: "POST",
    }).then(() => loadMessages());
  };

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <div>
      <h1>Hello from React</h1>
      <p>{message}</p>
      <button onClick={addMessage}>Add Message</button>
    </div>
  );
}

export default App;