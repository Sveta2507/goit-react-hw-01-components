import React from "react";
import PropTypes from "prop-types";
// import setAvatar from "../../additional/avatar.js";
import classes from "./Friends.module.css";

const FriendsItem = ({ avatar, isOnline, name, noAvatar, id }) => (
  <li className={classes.friendItem}>
    <span className={classes.friendSpan} isOnline={isOnline} />
    <img
      className={classes.friendImg}
      onError={() => {
        // setAvatar(`.friend-avatar[data-id='${id}']`);
      }}
      src={avatar}
      data-src={noAvatar}
      data-id={id}
      alt="avatar"
    />
    <p className={classes.friendName}>{name}</p>
  </li>
);

FriendsItem.defaultProps = {
  isOnline: false,
  name: "",
};
FriendsItem.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  noAvatar: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendsItem;
