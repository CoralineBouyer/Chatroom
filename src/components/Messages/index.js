import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import './style.scss';
import Message from './Message';

function Messages() {
  const messagesRef = useRef();
  const messages = useSelector((state) => state.messages);
  useEffect(() => {
    messagesRef.current.scroll(0, messagesRef.current.scrollHeight);
  }, [messages]);
  return (
    <section className="messages" ref={messagesRef}>
      {messages.map((message) => (
        <Message
          key={message.id}
          author={message.author}
          content={message.content}
        />
      ))}
    </section>
  );
}

export default Messages;


