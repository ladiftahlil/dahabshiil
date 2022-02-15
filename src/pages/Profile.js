import { Tabs } from 'antd';
import Changephoto from '../components/Changephoto';
import Changepassword from '../components/Changepassword';
import './Profile.css'

const { TabPane } = Tabs;

function Profile() {
  return <div className='profile'>
    <h1>Edit user Profile</h1>
    <Tabs defaultActiveKey="1">
      <TabPane tab="Change Profile Photo" key="1">
        <Changephoto />
      </TabPane>
      <TabPane tab="Change Password" key="2">
        <Changepassword />
      </TabPane>
    </Tabs>
  </div>;
}

export default Profile;
