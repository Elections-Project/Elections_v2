import React, { useState } from 'react';

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const toggleChatBox = () => setIsOpen(!isOpen);

  const sendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: 'user' }]);
      setInputMessage('');
      // هنا يمكنك إضافة المنطق لإرسال الرسالة إلى الخادم أو معالجتها
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 [direction:ltr]">
      {!isOpen ? (
        <button
          onClick={toggleChatBox}
          className="bg-[#059b4f] text-white rounded-full p-3 shadow-lg hover:bg-[#1ea15f] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl w-80 flex flex-col h-[400px]">
          <div className="bg-[#059b4f] text-white px-4 py-2 flex justify-between items-center rounded-t-lg">
            <h3 className="font-semibold">Chat</h3>
            <button onClick={toggleChatBox} className="text-white hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto max-h-[400px]">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-green-100' : 'bg-gray-200'}`}>
                  {message.text}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={sendMessage} className="border-t p-2 flex [direction:rtl]">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="اكتب رسالتك هنا..."
              className="flex-1 border rounded-r-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#059b4f]"
            />
            <button
              type="submit"
              className="bg-[#059b4f] text-white px-4 py-2 rounded-l-lg hover:bg-[#28c376] transition-colors"
            >
              إرسال
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBox;