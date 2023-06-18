import Head from "next/head";
import { useContext, useState, useRef, useEffect } from 'react';
import { AppStateContext } from '@/pages/AppStateContext';

export default function Home() {
  const { messages, setMessages } = useContext(AppStateContext);
  const [inputValue, setInputValue] = useState("");
  const chatInputRef = useRef(null);
  const chatMessagesRef = useRef(null); // Tambahkan baris ini

  useEffect(() => {
    const storedMessages = localStorage.getItem("chatMessages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (messages.length === 0) {
      const storedMessages = localStorage.getItem("chatMessages");
      if (storedMessages) {
        setMessages(JSON.parse(storedMessages));
      }
    }
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([inputValue, ...messages]);
      setInputValue("");
    }
  };
  

  const handleDeleteMessage = (index) => {
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);
    setMessages(updatedMessages);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="container text-center" style={{ paddingTop: "80px" }}>
      <div className="row justify-content-evenly">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <div className="card-body" style={{ maxHeight: "300px", overflowY: "auto" }}>
              <h5 className="card-title">LIVE CHAT</h5>
              <div className="chat-messages" ref={chatMessagesRef} style={{ display: "flex", flexDirection: "column-reverse" }}>
  {messages.map((message, index) => (
    <div key={index} className="message">
      <span>{message}</span>
      <button
        className="btn btn-danger btn-sm float-end"
        onClick={() => handleDeleteMessage(index)}
      >
        Hapus
      </button>
    </div>
  ))}
</div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <div className="card-body">
              <div className="chat-input">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Type a message..."
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  ref={chatInputRef}
                />
                <button
                  className="btn btn-primary"
                  onClick={handleSendMessage}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}
