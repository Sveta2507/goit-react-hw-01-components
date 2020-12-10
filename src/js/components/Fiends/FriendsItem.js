import React from 'react';
import PropTypes from 'prop-types';
import setAvatar from '../../additional/avatar.js';
import styled from 'styled-components';

const ListItem = styled.li`
  background-color: #339966;
  box-shadow: 0 3px 15px 3px #006666;
  display: flex;
  align-items: center;
  width: 33%;
  padding: 10px;

  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;
const Status = styled.span`
  background-color: ${(props) => (props.isOnline ? '#00FF33' : '#FF0000')};
  display: block;
  width: 20px;
  margin-right: 20px;
  height: 20px;
  border-radius: 50%;
`;
const Img = styled.img`
  height: 130px;
  width: 130px;
  border-radius: 8px;
  margin-right: 20px;
  background-size: contain;
`;
const Name = styled.p`
  font-weight: 1000;
  font-size: 25px;
`;

const FriendsItem = ({ avatar, isOnline, name, noAvatar, id }) => (
  <ListItem>
    <Status isOnline={isOnline} />
    <Img
      onError={() => {
        setAvatar(`.friend-avatar[data-id='${id}']`);
      }}
      src={avatar}
      data-src={noAvatar}
      data-id={id}
      alt="avatar"
      className="friend-avatar"
    />
    <Name>{name}</Name>
  </ListItem>
);

FriendsItem.defaultProps = {
  isOnline: false,
  name: '',
};
FriendsItem.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  noAvatar: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendsItem;
