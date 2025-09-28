import { useState } from 'react';
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'


      

function App() {

        const [chatMessages, setChatMessages] = useState([]);

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
