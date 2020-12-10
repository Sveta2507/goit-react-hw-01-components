import React from 'react';
import setAvatar from '../../additional/avatar.js';
import ProfileStats from './ProfileStats.js';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledProfile = styled.div`
  background-color: #33cc99;
  justify-content: center;
  display: flex;
  align-items: center;
  min-height: 600px;
`;
const Wrapper = styled.div`
  box-shadow: 0 3px 15px 3px #006666;
  min-height: 300px;
  min-width: 250px;
`;
const Description = styled.div`
  background-color: #00ffcc;
  display: flex;
  flex-direction: column;
  min-height: 260px;
  justify-content: center;
  align-items: center;
`;
const Name = styled.p`
  color: black;
  font-size: 20px;
  font-weight: 500;
`;
const P = styled.p`
  color: black;
`;
const Img = styled.img`
  margin-bottom: 20px;
  height: 128px;
  width: 128px;
  border-radius: 50%;
`;

const Profile = ({ name, tag, location, avatar, stats, noAvatar }) => {
  return (
    <StyledProfile>
      <Wrapper>
        <Description>
          <Img
            onError={() => {
              setAvatar('.profile-avatar');
            }}
            src={avatar}
            data-src={noAvatar}
            alt="avatar"
            className="profile-avatar"
          />
          <Name>{name}</Name>
          <P>@{tag}</P>
          <P>{location}</P>
        </Description>
        <ProfileStats stats={stats} />
      </Wrapper>
    </StyledProfile>
  );
};

Profile.defaultProps = {
  tag: '@',
  location: 'Somewhere in the human world',
};
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
  noAvatar: PropTypes.string.isRequired,
};

export default Profile;
