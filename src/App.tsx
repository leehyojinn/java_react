import React, { useState } from 'react';
import './App.css';
import BoardItem from 'components/BoardItem';
import { commentListMock, favoriteListMock, latestBoardListMock, top3BoardListMock } from 'mocks';
import Top3item from 'components/Top3Item';
import CommentItem from 'components/CommentItem';
import FavoriteItem from 'components/FavoriteItem';
import InputBox from 'components/InputBox';

function App() {
  const [value,setValue] = useState<string>('');
  return (
     <>
      {/* {latestBoardListMock.map( boardListItem => <BoardItem boardListItem={boardListItem}/>)} */}
      {/* {top3BoardListMock.map( top3ListItem => <Top3item top3ListItem={top3ListItem}/>)} */}
      {/* {commentListMock.map( commentListItem => <CommentItem commentListItem={commentListItem}/>)} */}
      {/* {favoriteListMock.map( favoriteListItem => <FavoriteItem favoriteListItem={favoriteListItem}/>)} */}
      <InputBox label='이메일' type='text' placeholder='이메일주소입력' value={value} error={false} setValue={setValue}/>
     </>
  );
}

export default App;
