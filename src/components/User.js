import React from 'react';

function User({userimg, username}) {
  return (<div className='user'>
  <img src={userimg} alt='user'/>
  <span>{username}</span>
  <button className='logout'>LOGOUT</button>
</div>);
}

export default User;
