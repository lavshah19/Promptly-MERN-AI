import React, { useState } from 'react';
import axios from 'axios';
import ChatMessages from '../component/ChatMessages';
import ChatInput from '../component/ChatInput';
import { Bot } from 'lucide-react';


const ChatWithAi = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (prompt) => {
    setIsTyping(true);
    if (!prompt.trim()) return;

    const userMessage = { text: prompt, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/generate`, {
        prompt,
      });

      const aiMessage = { text: res.data, sender: 'ai' };
      setIsTyping(false);
      setMessages((prev) => [...prev, aiMessage]);

    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { text: 'Error fetching response from AI.', sender: 'ai' },
      ]);
      setIsTyping(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto h-screen flex flex-col bg-white rounded-lg shadow-lg overflow-hidden py-4 ">
      <div className="bg-blue-600 text-white p-4 flex items-center justify-center rounded-t-4xl">
        <Bot className="mr-2" size={24} />
        <h2 className="text-2xl font-bold">Promptly</h2>
      </div>
      
      <div className="flex-1 overflow-hidden flex flex-col">
        <ChatMessages messages={messages} isTyping={isTyping} />
        <ChatInput onSend={handleSend} isDisabled={isTyping} />
      </div>
    </div>
  );
};

export default ChatWithAi;
