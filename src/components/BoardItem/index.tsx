import React from 'react'
import './style.css'
import { BoardListItem } from 'types/interface';
import { useNavigate } from 'react-router-dom';
import DefaultProfileImage from 'assets/image/default-profile-image.png'

interface Props {
    boardListItem : BoardListItem;
}

// component : Board list item 컴포넌트


export default function BoardItem({boardListItem} : Props) {
    
    // properties
    const {boardNumber, title, content, boardTitleImage} = boardListItem;
    const {favoriteCount, commentCount, viewCount} = boardListItem;
    const {writeDateTime, writerNickname, writerProfileImage} = boardListItem;
    
    // fuction 네비게이터
    // const navigator = useNavigate();

    // 이벤트
    const onClickHandler = () => {
        // navigator(boardNumber);
    }

    return (
    <div className='board-list-item' onClick={onClickHandler}>
        <div className='board-list-item-main-box'>
            <div className='board-list-item-top'>
                <div className='board-list-item-profile-box'>
                    <div className='board-list-item-profile-image' style={{backgroundImage:`url(${writerProfileImage ? writerProfileImage : DefaultProfileImage})`}}></div>
                </div>
                <div className='board-list-item-write-box'>
                    <div className='board-list-item-nickname'>{writerNickname}</div>
                    <div className='board-list-item-write-date'>{writeDateTime}</div>
                </div>
            </div>
            <div className='board-list-item-middle'>
                <div className='board-list-item-title'>{title}</div>
                <div className='board-list-item-content'>{content}</div>
            </div>
            <div className='board-list-item-bottom'>
                <div className='board-list-item-counts'>
                    {`댓글수 ${commentCount} - 좋아요 ${favoriteCount} - 조회수 ${viewCount}`}
                </div>
            </div>
        </div>
        {boardTitleImage !== null && (
        <div className='board-list-item-image-box'>
            <div className='board-list-item-image' style={{backgroundImage:`url(${boardTitleImage})`}}></div>
        </div>
        )}        
    </div>
  )
}

