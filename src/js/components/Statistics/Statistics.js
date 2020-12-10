import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StatisticItem from './StatisticsItem';
import hexColor from '../../additional/hexColor';

const Section = styled.section`
  background-color: #33cc99;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  background-color: #00ffcc;
  box-shadow: 0 3px 15px 3px #006666;
  margin: 0 auto;
  max-width: 70%;
`;
const Title = styled.h2`
  display: ${(props) => (props.titleText ? 'flex' : 'none')};
  color: grey;
  font-size: 25px;
  font-weight: 800;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  padding-top: 15px;
  padding-bottom: 15px;
`;
const List = styled.ul`
  display: flex;
  width: 100%;
`;

const Statistics = ({ statistics, title }) => (
  <Section>
    <Wrapper>
      <Title titleText={title}>{title}</Title>
      <List>
        {statistics.map(({ label, percentage, id }) => (
          <StatisticItem
            label={label}
            percentage={percentage}
            key={id}
            color={hexColor()}
          />
        ))}
      </List>
    </Wrapper>
  </Section>
);

Statistics.propTypes = {
  statistics: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
};

export default Statistics;
