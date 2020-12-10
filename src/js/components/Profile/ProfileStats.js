import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProfileStatsItem from './ProfileStatsItem';

const List = styled.ul`
  border: 1px solid grey;
  margin: 0;
  padding: 0;
  height: 100%;
  justify-content: space-between;
  display: flex;
  background-color: #00cc99;
`;

const ProfileStats = ({ stats }) => (
  <List>
    {Object.entries(stats).map((entry, index) => (
      <ProfileStatsItem key={index} label={entry[0]} quantity={entry[1]} />
    ))}
  </List>
);

ProfileStats.propTypes = {
  stats: PropTypes.object.isRequired,
};

export default ProfileStats;
