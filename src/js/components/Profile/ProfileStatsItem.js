import React from "react";
import PropTypes from "prop-types";
import classes from "./Profile.module.css";

const ProfileStatsItem = ({ label, quantity }) => (
  <li className={classes.listItem}>
    <li className={classes.label}>{label}</li>
    <span className={classes.quantity}>{quantity}</span>
  </li>
);

ProfileStatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number,
};
ProfileStatsItem.defaultProps = {
  quantity: 0,
};

export default ProfileStatsItem;
