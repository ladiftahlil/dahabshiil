import { Button } from 'antd'

function User({ userimg, username }) {
  return (<div className='user'>
    <img src={userimg} alt='user' />
    <span>{username}</span>
    <Button type="link" danger>Logout</Button>
  </div>);
}

export default User;
