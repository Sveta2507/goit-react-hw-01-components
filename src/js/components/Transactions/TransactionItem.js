import React from "react";
import PropTypes from "prop-types";
import classes from "./Transaction.module.css";

const TransactionItem = ({ type, amount, currency }) => (
  <tr className={classes.tr}>
    <td className={classes.td1}>{type}</td>
    <td className={classes.td1}>{amount}</td>
    <td className={classes.td1}>{currency}</td>
  </tr>
);

TransactionItem.defaultProps = {
  type: "",
  amount: 0,
  currency: "",
};
TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionItem;
