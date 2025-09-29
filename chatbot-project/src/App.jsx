import { useState, useEffect } from 'react';
import { Chatbot } from 'supersimpledev';
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'


      

function App() {

  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);

  

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);

    
  useEffect(() => {
    Chatbot.addResponses({
      'bye': 'Se you later. Have a great day!',
      'give me a unique id': function() {
        return(
          `Sure! Here's a unique ID: ${crypto.randomUUID()}`
        )
      }
    })
  , []}); // [] tells useEffect to only run once. We only want to run

    


        /*const [chatMessages, setChatMessages] = React.useState([{
          message: 'hello chatbot',
          sender: 'user',
          id: 'id1'
        }, {
          message: 'Hello! How can I help you?',
          sender: 'robot',
          id: 'id2'
        }, {
          message: 'can you get me todays date?',
          sender: 'user',
          id: 'id3'
        } , {
          message: 'Today is September 24',
          sender: 'robot',
          id: 'id4'
        }]);*/
        //************************ The current data *********************************
        //const chatMessages = array[0]; 
        //************************ The updater Function *****************************
        //const setChatMessages = array[1];

        //*********************** Array Destructuring *******************************
        //const [chatMessages, setChatMessages] = array

        return (
           <div className="app-container">
              {chatMessages.length === 0 && (
                <p className="welcome-message">
                  Welcome to the chatbot project! Send a message using the textbox below.
                </p>
              )}
              <ChatMessages 
                chatMessages = {chatMessages}
              />
              <ChatInput 
                chatMessages = {chatMessages}
                setChatMessages = {setChatMessages}
              /> {/*******************Component Syntax**************/}

            </div>
        )
      }

export default App
