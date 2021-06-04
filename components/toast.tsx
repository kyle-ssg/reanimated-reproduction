import React, { useCallback, useEffect, useState } from "react";
import cn from "classnames";

interface Message {
  children?: React.ReactNode;
  expiry?: number;
  remove?: () => void;
  id:string;
  expires?: number;
  isRemoving?: boolean;
}

const Message: React.FC<Message> = ({
  expiry,
  children,
  expires,
  remove,
}) => {
  const [isRemoving, setIsRemoving] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(()=>{
      setTimeout(()=>{
        remove();
      },500)
    }, expiry);
    // eslint-disable-next-line
  },[expiry]);

  const hasExpired = expires<=Date.now().valueOf();
  console.log(expires,Date.now().valueOf())
  const className = cn({
    "toast-message": true,
    "alert alert-warning fade": true,
    "in show": !hasExpired && !isRemoving,
    "removing out": hasExpired || isRemoving,
  });

  return (
    <div data-test="toast" className={className}>
      <a onClick={()=>{
        setIsRemoving(true)
      }} className="float-right"
      >
        <i className="fas fa-times"></i>
      </a>
      <div className="flex-row">
        <div className="col-2">
          <i className="toast__icon fas fa-check-circle"></i>
        </div>
        <div className="col pl-3">
          {children}
        </div>
      </div>
    </div>
  );
};

Message.displayName = "Message";

const Toast: React.FC = () => {
  const [messages, setMessages] = useState([]);

  global.toast = useCallback((content: string, expiry: number) => {
    const id = Utils.GUID();
    if (!E2E) {
      expiry = expiry || (Constants.E2E?1000:5000);
      setMessages([{ content, expiry: expiry, expires: Date.now().valueOf()+expiry, id }].concat(messages))
    }
  },[messages]);

  const remove = useCallback(()=>{
    setMessages(messages.filter((v)=>{
      return v.expires + 400 > Date.now().valueOf()
    }))
  },[messages])

  return (
    <div className="toast-messages">
      {messages.filter((v)=>{
        return v.expires + 400 > Date.now().valueOf()
      }).map((message,i) => (
        <Message
          key={message.id}
          remove={remove}
          id={message.id}
          expires={message.expires}
          expiry={message.expiry}
          isRemoving={message.isRemoving}
        >
          {message.content}
        </Message>
      ))}
    </div>
  );
};

Toast.displayName = "ToastMessages";
export default Toast;
