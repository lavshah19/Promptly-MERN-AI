import React, { useRef, useEffect } from 'react';
import MessageBubble from './MessageBubble';
import { Bot, Loader2 } from 'lucide-react';

const ChatMessages = ({ messages, isTyping }) => {
  const messagesEndRef = useRef(null);
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white">
      {messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-gray-500 animate-fade-in">
          <div className="p-4 bg-blue-50 rounded-full mb-4">
            <Bot size={40} className="text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Start a conversation with the AI</h2>
          <p className="text-sm text-gray-500 max-w-md text-center">
            Type a message below to begin. You can ask questions, request information, or just chat.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {messages.map((msg, index) => (
            <div key={index} className={`${index > 0 ? 'pt-2' : ''} transition-all duration-300 ease-in-out`}>
              <MessageBubble text={msg.text} sender={msg.sender} />
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start transition-opacity duration-300 ease-in-out">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-2xl rounded-bl-none shadow-sm border border-gray-200">
                <Loader2 className="animate-spin text-blue-500" size={18} />
                <span className="text-sm font-medium">AI is thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      )}
    </div>
  );
};

export default ChatMessages;