import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "../components/Dogpicture";
const botName = "MunniBot";

const config = {
  initialMessages: [createChatBotMessage(`Hi! i'm ${botName}`)],
  botName: botName,
  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;
