import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import styled from 'styled-components';

const Table = styled.table`
  min-width: 1100px;
  margin: 0 auto;
  border-collapse: collapse;
`;
const Th = styled.th`
  font-size: 14px;
  font-weight: 1000;
  line-height: 30px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: #006666;
  border: 2px solid black;
  padding: 15px;
`;

const Transaction = ({ transactions }) => (
  <Table>
    <thead>
      <tr>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>
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
  </Table>
);

Transaction.propTypes = { transactions: PropTypes.array.isRequired };
export default Transaction;
