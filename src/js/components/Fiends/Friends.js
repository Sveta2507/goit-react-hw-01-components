import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FriendsItem from './FriendsItem.js';

const List = styled.ul`
  background-color: #33cc99;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const Friends = ({ friends, noAvatar }) => (
  <List>
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
  </List>
);

Friends.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
  noAvatar: PropTypes.string.isRequired,
};

export default Friends;
