import React from "react";
import PropTypes from "prop-types";
import classes from "./Statistics.module.css";

const StatisticsItem = ({ label, percentage, color }) => (
  <li className={classes.listItem} color={color}>
    <span className={classes.spanLabel}>{label}</span>
    <span className={classes.percentage}>{percentage}%</span>
  </li>
);

StatisticsItem.defaultProps = { label: "", percentage: 0 };
StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default StatisticsItem;
