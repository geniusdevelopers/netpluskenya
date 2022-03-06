//import { render } from "@testing-library/react";
import React, { Component, useState } from "react";

import { BsChatQuoteFill } from 'react-icons/bs';
import { ImBlogger } from 'react-icons/im';
import { FaAngleDoubleDown, FaAngleDoubleUp, FaRegDotCircle } from 'react-icons/fa';


import './ChatRoom.css';

function ChatRoom() {
    const [directChart, setDirectChart] = useState(false);
    const [blogg, setBlogg] = useState(false);

    function handleBlogButtonClick() {
        setBlogg(true);
        setDirectChart(false);
    }

    function handleDirectMessageClick() {
        setBlogg(false);
        setDirectChart(true);
    }

    function handleMinimizeButtonClick() {
        setBlogg(false);
        setDirectChart(false);
    }

    function handleExpandButtonClick() {
        setBlogg(false);
        setDirectChart(true);
    }

    return (
        <div className={(directChart || blogg) ? "chat-room" : null}>

            <div className="chat-room-buttons">
                <ImBlogger className="blogg-button" onClick={handleBlogButtonClick} />
                <BsChatQuoteFill className="direct-chat-button" onClick={handleDirectMessageClick} />
                {(directChart || blogg) ?
                    <FaAngleDoubleDown className="minimize-chatroom" onClick={handleMinimizeButtonClick} /> :
                    <FaAngleDoubleUp className="expand-chatroom" onClick={handleExpandButtonClick} />}
            </div>

            {(directChart || blogg) && <div className="online-name">
                {(directChart && (directChart || blogg)) ? 
                <p>Messaging</p> : 
                <p>oluochwikigrant@gmail.com</p>}
                <FaRegDotCircle className="online-button"/>
            </div>}

            {directChart && <div className="chat-direct-message">
                <ClientDirectMessage /><AssistantDirectMessage /><ClientDirectMessage /><AssistantDirectMessage />
                <ClientDirectMessage /><AssistantDirectMessage /><ClientDirectMessage /><AssistantDirectMessage />
                <ClientDirectMessage /><AssistantDirectMessage /><ClientDirectMessage /><AssistantDirectMessage />
            </div>}

            {blogg && <div className="blogg-direct">
                <ClientDirectMessage /><AssistantDirectMessage /><ClientDirectMessage /><AssistantDirectMessage />
                <ClientDirectMessage /><AssistantDirectMessage /><ClientDirectMessage /><AssistantDirectMessage />
                <ClientDirectMessage /><AssistantDirectMessage /><ClientDirectMessage /><AssistantDirectMessage />
            </div>}

            {(directChart || blogg) && 
            <div className="text-area-chat-container" >
                <textarea className="text-area-chat" id="text-area-chat" name="textarea" rows="4"></textarea>
                </div>}
        </div>
    )
}

function ClientDirectMessage() {
    return (
        <div className="client-direct-message">
            <div className="client-message-holder">
                <p>
                    This is the client message This is the client message This is the client message
                    This is the client message This is the client message This is the client message
                    This is the client message This is the client message This is the client message
                    This is the client message This is the client message This is the client message
                </p>
            </div>
        </div>
    )
}

function AssistantDirectMessage() {
    return (
        <div className="assistant-direct-message">
            <div className="assistant-message-holder">
                <p>
                    This is the client message This is the client message This is the client message
                    This is the client message This is the client message This is the client message
                    This is the client message This is the client message This is the client message
                    This is the client message This is the client message This is the client message
                </p>
            </div>
        </div>
    )
}

export default ChatRoom;
