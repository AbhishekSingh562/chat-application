import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { sendOutlined, PictureOutlined } from "@ant-design/icons";

const MessageForm = (props) => {
  const [value, setValue] = useState("");
  const { chatId, creds } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();
    if (text.length > 0) sendMessage(creds, chatId, { text });
    setValue("");
  };
  const handleChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId);
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.value, text: "" });
  };
  return (
    <form className="message-from" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <lable htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </lable>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleUpload}
      />
    </form>
  );
};

export default MessageForm;
