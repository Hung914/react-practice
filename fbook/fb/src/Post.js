import React from 'react';
import './Post.css';
import {Avatar} from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatBubbleOutLineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import {ExpandMoreOutlined} from '@material-ui/icons';

function Post({profilePic, image, username,timestamp,message}) {
    return (
        <div className = 'post'>
            <div className = 'posttop'>
                <Avatar src = {profilePic}
                className = 'postavatar' />
                <div classname = 'posttopinfo'>
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className = 'postbottom'>
                <p>{message}</p>
            </div>

            <div className = 'postimage'>
                <img src = {image} alt = '' />
            </div>

            <div className = 'postoption'>
                <div className = 'poption'>
                    <ThumbUpIcon />
                    <h3>Like</h3>
                </div>
                <div className = 'poption'>
                    <ChatBubbleOutLineIcon />
                    <h3>Comment</h3>
                </div>
                <div className = 'poption'>
                    <NearMeIcon />
                    <h3>Share</h3>
                </div>
                <div className = 'poption'>
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div>
            </div>

        </div>
    )
}

export default Post
