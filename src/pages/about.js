import React, { useState } from "react";

const About = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteMessage = (index) => {
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);
    setMessages(updatedMessages);
  };

  return (
    <div>
      <h1>About Me</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            {message}
            <button onClick={() => handleDeleteMessage(index)}>Hapus</button>
          </div>
        ))}
      </div>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      <p>
        <a href="/">home</a>
      </p>
    </div>
  );
};

export default About;
