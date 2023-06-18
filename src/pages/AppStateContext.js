import { createContext, useState, useEffect } from 'react';

export const AppStateContext = createContext();

export function AppStateProvider({ children }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedMessages = localStorage.getItem('chatMessages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  return (
    <AppStateContext.Provider value={{ messages, setMessages }}>
      {children}
    </AppStateContext.Provider>
  );
}
