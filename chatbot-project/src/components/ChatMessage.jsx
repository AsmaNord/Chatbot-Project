import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/profile-1.jpg';
import './ChatMessage.css';

export function ChatMessage ({message, sender}) {
        console.log(UserProfileImage);
        //const message = props.message;
        //const sender = props.sender;

        //const { message,sender } = props; /*Destructing: This takes the message property from props and save it in a variable called message*/

        /*
        if (sender === 'robot') {
          return (
            <div>
              <img src="robot.png" width="50" />
              {message}
          </div>
          )
        }
        */

        return (
          <div className={
            sender === 'user' 
              ? 'chat-message-user' 
              : 'chat-message-robot'
          }>
            {sender === 'robot' && 
              (<img src={RobotProfileImage} className="chat-mesage-profile" />)
            } {
            /*If the value on the left is true the the result gonna be the second value which is the value after the &&. It is a shortcut in JSX for if staments*/}
            <div className="chat-message-text">
              {message}
            </div>
            {sender === 'user' && 
              (<img src={UserProfileImage} className="chat-mesage-profile"/>)
            }
          </div>
          
        );
      }