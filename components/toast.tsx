import React, { useEffect, useState } from "react";
import cn from "classnames";

interface Message {
  children?: React.ReactNode;
  expiry?: number;
  content?: React.ReactNode;
  remove?: () => void;
  isRemoving?: boolean;
}

const Message: React.FC<Message> = ({
  remove,
  expiry = 5000,
  isRemoving,
  children,
  content,
}) => {
  useEffect(() => {
    setTimeout(remove, expiry);
  },[]);

  const className = cn({
    "toast-message": true,
    "alert alert-warning fade": true,
    "in show": !isRemoving,
    "removing out": isRemoving,
  });

  return (
    <div className={className}>
      <a onClick={remove} className="float-right">
        <span className="icon ion-md-close" />
      </a>
      {children}
    </div>
  );
};

Message.displayName = "Message";

const Toast: React.FC = () => {
  const [messages, setMessages] = useState([]);

  useEffect(()=>{
    // @ts-ignore
    global.toast = (content: string, expiry: number) => {
      const id = Utils.GUID();
      if (!E2E) {
        setMessages((messages) => [{ content, expiry, id }, ...messages]);
      }
    };
  },[])

  const remove = (id: number) => {
    const index = messages.findIndex(message => message.id === id);

    if (index !== -1) {
      messages[index].isRemoving = true;
      setTimeout(() => {
        const index = _.findIndex(messages, { id });
        const newMessages = messages;
        newMessages.splice(index, 1);
        setMessages(newMessages);
      }, 500);
      setMessages([...messages]);
    }
  };

  return (
    <div className="toast-messages">
      {messages.map((message) => (
        <Message
          key={message.id}
          isRemoving={message.isRemoving}
          remove={() => remove(message.id)}
          expiry={message.expiry}
        >
          {message.content}
        </Message>
      ))}
    </div>
  );
};

Toast.displayName = "ToastMessages";
export default Toast;
