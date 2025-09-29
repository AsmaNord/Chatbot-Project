import dayjs from 'dayjs';
import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import LoadingGif from '../assets/loading-spinner.gif';
import './ChatInput.css';;


export function ChatInput ({chatMessages, setChatMessages}) {

        const [inputText, setInputText] = useState('');
        const [isLoading, setIsLoading] = useState(false);

        function saveInputText(event) {
          setInputText (event.target.value);
        }

        async function sendMessage() {
          if (isLoading || inputText === '') {
            return;
          }
          setIsLoading(true);
          setInputText('');
          const newChatMessages = [
            ...chatMessages,
            {
              message: inputText,
              sender: 'user',
              id: crypto.randomUUID(),
              time: dayjs().valueOf()
            }
          ]


          setChatMessages(newChatMessages);
          setChatMessages([
            ...newChatMessages,
            {
              //message: 'Loading...',
              message: <img 
                src={LoadingGif}
                className="loading-gif"
              ></img>,
              sender: 'robot',
              id: crypto.randomUUID(),
              time: dayjs().valueOf()
            }
          ]);

          const response = await Chatbot.getResponseAsync(inputText);
          setChatMessages([
            ...newChatMessages,
            {
              message: response,
              sender: 'robot',
              id: crypto.randomUUID()
            }
          ]);



          setInputText('');
          setIsLoading(false);

        }

        function handleKeyDown(event) {
          event.key ==='Enter' && sendMessage()
          event.key === 'Escape' && setInputText('');
        }

        function clearMessages() {
    setChatMessages([]);
        }

        return (
          <div className="chat-input-container"> 
            <input 
              placeholder="Send a message to Chatbot" 
              size="30"
              onChange = {saveInputText}
              value = {inputText}
              onKeyDown = {handleKeyDown}
              className = "chat-input"
            />
            <button
              onClick = {sendMessage}
              className="send-button"
            >Send</button>
            <button
                 onClick={clearMessages}
                className="clear-button"
            >Clear</button>
          </div>
        );
      }