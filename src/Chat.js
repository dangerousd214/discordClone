import React, { useEffect, useState } from "react";
import './Chat.css';
import ChatHeader from './ChatHeader';
import Message from './Message';
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from "./features/appSlice";
import { selectUser } from "./features/userSlice";
import db from "./firebase";
import firebase from "firebase";

function Chat() {
    const user = useSelector(selectUser); 
    const channelId = useSelector(selectChannelId);  
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (channelId) {
          db.collection("channels")
            .doc(channelId)
            .collection("messages")
            .orderBy("timestamp", "asc")
            .onSnapshot((snapshot) =>
              setMessages(snapshot.docs.map((doc) => doc.data()))
            );
        }
      }, [channelId]);
    
      const sendMessage = (e) => {
        e.preventDefault();
    
        db.collection("channels").doc(channelId).collection("messages").add({
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          message: input,
          user: user,
        });
    
        setInput("");
      };

    return (
        <div className='chat'>
            <ChatHeader channelName={channelName} />
            <div className='chat_messsages'>
                {messages.map((message) => (
                <Message timestamp={message.timestamp} message={message.message} user={message.user} />
                ))}
            </div>

            <div className='chat_input'>
            <AddCircleIcon fontSize="large" />
            <form>
                <input placeholder={`Message #${channelName}`} onChange={(e) => setInput(e.target.value)} disabled={!channelId} value="" />
                <button type='submit' className='chat_inputButton' onClick={sendMessage} disabled={!channelId}>Send Message</button>
            </form>

            <div className="chat_inputIcons">
                <CardGiftcardIcon fontSize="large" />
                <GifIcon fontSize="large" />
                <EmojiEmotionsIcon fontSize="large" />
            </div>
            </div>
        </div>
    )
}

export default Chat
