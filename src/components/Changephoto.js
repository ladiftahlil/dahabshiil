import { useState } from 'react';
import { Input, Button } from 'antd'

function Changephoto() {
    const [canupload, setCanupload] = useState(true);
    const [selectedFile, setSelectedFile] = useState(null);
    const [newimage, setNewimage] = useState({image:'/rsc/defaults/user.jpg'})
    const fileSelectedHandler = event => {
        setCanupload(false);
        setSelectedFile(event.target.files[0]);
        if (event.target.files && event.target.files[0]) {
            setNewimage({
              image: URL.createObjectURL(event.target.files[0])
            });
          }
    };
    const fileUploadHandler = (event) => {
        console.log("handling upload; ", selectedFile.name);
    };

    return (
        <div className='edit-profile'>
            <h3>Change profile photo</h3>
            <div className='profile-photo'>
                <div>
                    <img src='/rsc/img/profile1.jpg' alt='profile' />
                </div>
                <div>
                    {/* <img src='https://thispersondoesnotexist.com/image' alt='new profile ' /> */}
                    <img src={newimage.image} alt='new profile ' />
                </div>
                <div className='upload'>
                    <Input type='file' onChange={fileSelectedHandler} accept="image/*"/>
                    <Button type="primary" size='large' style={{ width: '150px' }} onClick={fileUploadHandler} disabled={canupload}>Chnage Profile</Button>
                </div>
            </div>


        </div>

    );
}

export default Changephoto