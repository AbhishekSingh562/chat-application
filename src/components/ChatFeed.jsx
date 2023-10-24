import React from "react";
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheriMessage from "./TheriMessage";

const ChatFeed = (props) => {
  const { chats, activeChats, userName, messages } = props;

  const chat = chats && chats[activeChats];
  console.log(chat, userName, messages);
  const renderMessages = () => {
    const keys = Object.keys(messages);
    return keys.map(keys,index)=>{
      const message=messages[]
    }
  };
  renderMessages();

  return <div>ChatFeed</div>;
};

export default ChatFeed;
