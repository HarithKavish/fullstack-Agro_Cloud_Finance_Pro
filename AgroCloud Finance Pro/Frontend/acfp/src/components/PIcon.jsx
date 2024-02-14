// import React from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

function ProfileIcon(props) {
  // props: name, src, editable
  const { name, src, editable } = props;

  // handle file upload
  const handleUpload = (event) => {
    // get the selected file
    const file = event.target.files[0];
    // create a URL for the file
    const url = URL.createObjectURL(file);
    // update the src prop with the new URL
    props.src = url;
  };

  return (
    <div id='upl'>
        <div className="profile-icon">
        <Avatar alt={name} src={src} />
        {editable && (
            <label htmlFor="icon-button-file">
            <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
            >
                <PhotoCamera />
            </IconButton>
            </label>
        )}
        <input
            accept="image/*"
            id="icon-button-file"
            type="file"
            onChange={handleUpload}
            hidden
        />
        </div>
    </div>
  );
}

export default ProfileIcon;
