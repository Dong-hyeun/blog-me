import './userSettings.css';
import Sidebar from '../../components/Sidebar/sidebar';

function UserSettings(props) {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              name=""
              id="fileInput"
              style={{ display: 'none' }}
            />
          </div>
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="username"
          />
          <label htmlFor="userEmail">UserEmail</label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            placeholder="username@gmail.com"
          />
          <label htmlFor="userPw">UserPassword</label>
          <input
            type="password"
            name="userPw"
            id="userPw"
            placeholder="user password"
          />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default UserSettings;
