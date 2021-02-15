import React, {useState} from 'react';
import './MessageSender.css';
import {Avatar} from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase';


function MessageSender() {
    const [{user}, dispatch] = useStateValue();
    const [input,setInput] = useState('');
    const [imageUrl, setImageUrl] = useState ('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        //for posting the posts
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL, 
            username : user.displayName,
            image: imageUrl

            
        });
        setInput('');
        setImageUrl('');

    };
    return (
        <div className = 'messageSender'>
            <div className = 'sendertop'>
                <Avatar src = {user.photoURL}/>
                <form onSubmit = {handleSubmit}>
                    <input
                    value = {input}
                    onChange = {(e) => setInput(e.target.value)}
                    className = 'senderinput' type = 'text' placeholder = 'Type something' />
                    <input 
                    value = {imageUrl}
                    onChange = {(e) => setImageUrl(e.target.value)}
                    type = 'text' placeholder = 'Image URL (optional)' />
                    <button type = 'submit'>Post</button>
                </form>

            </div>
            <div className = 'senderbottom'>
                <div className = 'option'>
                    <VideocamIcon style = {{color: 'red'}} />
                    <h3>Live Video</h3>
                </div>
                <div className = 'option'>
                    <PhotoLibraryIcon style = {{color: 'green'}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className = 'option'>
                    <InsertEmoticonIcon style = {{color: 'orange'}} />
                    <h3>Activities</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
