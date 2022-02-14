import { Tabs } from 'antd';
import Changephoto from '../components/Changephoto';
import './Profile.css'

const { TabPane } = Tabs;

function Profile() {
  return <div>
    <h1>Edit user Profile</h1>
    <Tabs defaultActiveKey="1">
      <TabPane tab="Change Profile Photo" key="1">
        <Changephoto />
      </TabPane>
      <TabPane tab="Change Password" key="2">
        Content of Tab Pane 2
      </TabPane>
    </Tabs>
  </div>;
}

export default Profile;
