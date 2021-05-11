import React from "react";
import { ChatEngine } from "react-chat-engine";
import { MoreContainer } from "../SharedStyles/Description";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import "./More.css";
const More = () => {
  if (!localStorage.getItem("username"))
    return (
      <MoreContainer>
        <LoginForm />
      </MoreContainer>
    );
  return (
    <MoreContainer>
      <ChatEngine
        height="79vh"
        projectID="264ce904-e3e6-439e-b223-4541fb3c729a"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
    </MoreContainer>
  );
};

export default More;
