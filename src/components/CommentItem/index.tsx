import React from 'react'
import './style.css'
import { CommentListItem } from 'types/interface';
import DefaultProfileImage from 'assets/image/default-profile-image.png'

interface Props {
    commentListItem : CommentListItem;
}

// component : comment list item 컴포넌트


export default function commentitem({commentListItem} : Props) {
    
    const {nickname, profileImage, wirteDatetime, content} = commentListItem;


    return (
        <div className="comment-list-item">
            <div className="comment-list-item-top">
                <div className="comment-list-item-profile-box">
                    <div className="comment-list-item-profile-image" style={{backgroundImage:`url(${profileImage ? profileImage : DefaultProfileImage})`}}></div>
                </div>
                <div className="comment-list-item-nickname">{nickname}</div>
                <div className="comment-list-item-divier">{'\|'}</div>
                <div className="comment-list-item-time">{wirteDatetime}</div>
            </div>
            <div className="comment-list-item-main">
                <div className="comment-list-item-content">{content}</div>
            </div>
        </div>
  )
}

