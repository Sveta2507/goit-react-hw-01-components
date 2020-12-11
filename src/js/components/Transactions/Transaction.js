import React from "react";
import PropTypes from "prop-types";
import TransactionItem from "./TransactionItem";
import classes from "./Transaction.module.css";

const Transaction = ({ transactions }) => (
  <table className={classes.table}>
    <thead className={classes.th}>
      <tr>
        <td>Type</td>
        <td>Amount</td>
        <td>Currency</td>
      </tr>
    </thead>

    <tbody>
      {transactions.map(({ id, type, amount, currency }) => (
        <TransactionItem
          key={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
    </tbody>
  </table>
);

Transaction.propTypes = { transactions: PropTypes.array.isRequired };
export default Transaction;
