import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.li`
  flex-direction: column;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 33%;

  &:not(:last-child) {
    border-right: 1px solid green;
  }
`;
const Label = styled.span`
  color: black;
  text-transform: capitalize;
  line-height: 1.5;
  font-weight: 1000;
  font-size: 15px;
`;
const Quantity = styled.span`
  font-weight: 1000;
  line-height: 1.5;
  color: black;
`;

const ProfileStatsItem = ({ label, quantity }) => (
  <ListItem>
    <Label>{label}</Label>
    <Quantity>{quantity}</Quantity>
  </ListItem>
);

ProfileStatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number,
};
ProfileStatsItem.defaultProps = {
  quantity: 0,
};

export default ProfileStatsItem;
