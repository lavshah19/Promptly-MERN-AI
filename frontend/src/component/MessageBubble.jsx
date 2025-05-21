import { Bot, User,CopyCheck, Copy } from 'lucide-react';
import React from 'react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MessageBubble = ({ text, sender }) => {
  const isUser = sender === 'user';
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
      <div className="flex gap-2">
        {!isUser && <Bot size={24} className="mt-1 text-blue-600" />}
        
        <div
          className={`px-4 py-3 rounded-2xl max-w-3xl shadow-sm  group ${
            isUser
              ? 'bg-blue-600 text-white rounded-br-none'
              : 'bg-gray-100 text-gray-800 rounded-bl-none'
          }`}
        >
          <div className="prose prose-sm">
            <ReactMarkdown>{text}</ReactMarkdown>
          </div>
          <div className="flex justify-end mt-2">
            <button
              onClick={() => {
                navigator.clipboard.writeText(text);
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 1000);
              }}
              className={`flex items-center gap-1 text-sm ${ isUser ? 'text-white' : 'text-gray-500'} opacity-0 group-hover:opacity-100 `}
            >
              {isCopied ? (
                <CopyCheck size={16} />
                ) : (
                <Copy size={16} />
              )}
              <span>{isCopied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>


        </div>
        
        {isUser && <User size={24} className="mt-1 text-blue-600" />}
      </div>
    </div>
  );
};

export default MessageBubble;
