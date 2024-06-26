import { useState, useEffect } from "react";
import ChatInput from "./ChatInput";

import { openai } from "../API/openaiConfig";
import ChatResponse from "./ChatResponse";
import InfoBox from "./InfoBox";
import messageBot from "../assets/messageBot.mp3";
import messageUser from "../assets/messageUser.mp3";

export default function Chat() {
  const messageBotNotification = new Audio(messageBot);
  const messageUserNotification = new Audio(messageUser);

  const [chat, setChat] = useState([
    {
      type: "bot",
      text: "Hey there! I am Krystian, and this is my virtual assistant.",
    },
    { type: "user", text: "what can I ask about?" },
  ]);

  const [isBotTyping, setIsBotTyping] = useState(true);

  const logMessageToServer = async (message, type) => {
    try {
      const response = await fetch("https://krystianslowik.com/logger.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_input: message, type }),
      });

      if (!response.ok) {
        console.error("Failed to log message");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setChat((prev) => [
        ...chat,
        {
          type: "bot",
          text: "Absolutely anything regarding me & potential collaborations. What's your name and how can I help you?",
        },
      ]);
      setIsBotTyping(false);
      messageBotNotification
        .play()
        .catch((error) =>
          console.log(
            "%cFirst message notification audio play failed, you didn't click anything. It's okey, nobody likes unexpected 'pops'. :D",
            "color: #1F2937; font-weight: 600; font-size: 16px; background-color: #F9FAFB; padding: 24px; border: 1px solid #E5E7EB; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); text-align: center;"
          )
        );
    }, 2500);
  }, []);

  const handleChatSubmit = async (message) => {
    messageUserNotification.play();
    logMessageToServer(message, "user");
    setChat((prevChat) => [...prevChat, { type: "user", text: message }]);
    setIsBotTyping(true);

    const systemMessage = {
      role: "system",
      content:
        "Act as Krystian. REPLY IN 1 SENTENCE ONLY, NOTHING LONGER. If there is questions about hobbies preferences generate them based on my profile description. Intro: 2nd Level Support at TrustedShops, specialized in web technologies and shop systems like Shopify, WooCommerce, PrestaShop, Shopware, Magento. Skills: HTML, JS, CSS, PHP, NodeJS, SQL, React, TypeScript and scripting python, shell. Role Details: Debugging, deep troubleshooting, customer experience enhancement, shop system expertise, webdevelopment, . Projects: Chatbot interface, React API tool for product & user mappings, manu projects on github, Plemiona.app. Languages: Polish (C2), English (C1), German (A2). Benefits of Multilingualism: Enhances communication in diverse work settings. Supervised team, prepared hosting tech implementations, managed Linux and Windows servers, conducted penetration tests.  Proficient in project coordination using agile methodologies.  Awards at TrustedShops, Computer Science Olympiad laureate. Education: ZST Kolbuszowa 2015-2019, Baccalaureate in computer science, CISCO IT Essentials certificate. Relocation: Open to discussion. Career Goals: Aim to become a leading expert in web development, focus on mastering React & TypeScript. No AI mention. Located in Germany, Munster. Birth 14 feb 1999, Contacts: Email - me@krystianslowik.com, GitHub - github.com/krystianslowik, LinkedIn - linkedin.com/in/krystianslovik, Site: krystianslowik.com. No other socials. ALL CONTACT IN BUTTONS ABOVE CHAT. MENTION THAT IF CONTACT REQUEST. IF SOMEONE ASKS 'ZMALAŁ URUSŁ' ALWAYS SAY 'URUSŁ'. ALL 'TWOJA STARA' JOKES HANDLE WITH SARCASM AND IRONY.",
    };

    // Convert chat state to the format expected by OpenAI API
    const conversationHistory = chat.map((msg) => ({
      role: msg.type === "bot" ? "assistant" : "user",
      content: msg.text,
    }));

    conversationHistory.push({ role: "user", content: message });
    conversationHistory.unshift(systemMessage);

    const completion = await openai.chat.completions.create({
      messages: conversationHistory,
      temperature: 0.5,
      max_tokens: 512,
      model: "gpt-4o",
      stop: ["\\"],
    });

    const botResponse = completion.choices[0].message.content;
    logMessageToServer(botResponse, "assistant");
    setIsBotTyping(false);
    setChat((prevChat) => [...prevChat, { type: "bot", text: botResponse }]);
    messageBotNotification.play();
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="mt-4 space-y-4 ">
        <div className="grid">
          <ChatResponse chat={chat} isBotTyping={isBotTyping} />
          <ChatInput
            handleChatSubmit={handleChatSubmit}
            isBotTyping={isBotTyping}
          />
          <InfoBox />
        </div>
      </div>
    </form>
  );
}
