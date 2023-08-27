import Head from "next/head";
import { useContext, useState, useRef, useEffect } from 'react';
import { AppStateContext } from '@/providers/AppStateContext';

export default function Home() {
  const { messages, setMessages } = useContext(AppStateContext);
  const [inputValue, setInputValue] = useState("");
  const chatInputRef = useRef(null);
  const chatMessagesRef = useRef(null);

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
    <>
      <Head>
        <title>Test</title>
        <meta name="description" content="Welcome to my website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://github.com/nandasafiqalfiansyah">
            👾nanda
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
         ©️hatyfy A Real-time Chat Application
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                🏡 Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/nandasafiqalfiansyah">
                🤖 github
              </a> 
            </li>
            <li>
            <footer className=" text-center p-3">
        <p>&copy; 2023 All rights reserved.</p>
      </footer>
            </li>
          </ul>
        </div>
      </div>

      <div className="container text-center" style={{ paddingTop: "80px" }}>
        <div className="row justify-content-evenly">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <div
                className="card-body"
                style={{ maxHeight: "300px", overflowY: "auto" }}
              >
                <h5 className="card-title">LIVE CHAT</h5>
                <hr/>
                <div
                  className="chat-messages"
                  ref={chatMessagesRef}
                  style={{ display: "flex", flexDirection: "column-reverse" }}
                >
                  {messages.map((message, index) => (
                    <div key={index} className="message m-1 border">
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

      
    </>
  );
}
