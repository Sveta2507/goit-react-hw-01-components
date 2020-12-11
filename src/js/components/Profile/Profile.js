import React from "react";
// import setAvatar from "../../additional/avatar.js";
import ProfileStats from "./ProfileStats.js";
import PropTypes from "prop-types";
import classes from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats, noAvatar }) => {
  return (
    <div className={classes.profileDiv}>
      <div className={classes.profileWrapper}>
        <div className={classes.profileDescription}>
          <img
            className={classes.profileImg}
            onError={() => {
              // setAvatar(".profile-avatar");
            }}
            src={avatar}
            data-src={noAvatar}
            alt="avatar"
            // className="profile-avatar"
          />
          <p className={classes.profileName}>{name}</p>
          <p className={classes.profileTag}>@{tag}</p>
          <p>{location}</p>
        </div>
        <ProfileStats stats={stats} />
      </div>
    </div>
  );
};

Profile.defaultProps = {
  tag: "@",
  location: "Somewhere in the human world",
};
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
  noAvatar: PropTypes.string.isRequired,
};

export default Profile;
