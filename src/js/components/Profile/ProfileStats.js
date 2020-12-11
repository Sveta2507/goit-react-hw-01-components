import React from "react";
import PropTypes from "prop-types";
import ProfileStatsItem from "./ProfileStatsItem";
import classes from "./Profile.module.css";

const ProfileStats = ({ stats }) => (
  <ul className={classes.profileList}>
    {Object.entries(stats).map((entry, index) => (
      <ProfileStatsItem key={index} label={entry[0]} quantity={entry[1]} />
    ))}
  </ul>
);

ProfileStats.propTypes = {
  stats: PropTypes.object.isRequired,
};

export default ProfileStats;
