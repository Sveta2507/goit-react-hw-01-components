import React from "react";
import PropTypes from "prop-types";
import FriendsItem from "./FriendsItem.js";
import classes from "./Friends.module.css";

const Friends = ({ friends, noAvatar }) => (
  <ul className={classes.friendsList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendsItem
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        key={id}
        id={id}
        noAvatar={noAvatar}
      />
    ))}
  </ul>
);

Friends.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
  noAvatar: PropTypes.string.isRequired,
};

export default Friends;
