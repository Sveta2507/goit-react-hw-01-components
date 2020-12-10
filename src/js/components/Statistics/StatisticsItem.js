import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 20px;
  background-color: ${(props) => props.color};
`;
const Span = styled.label`
  color: white;
  line-height: 20px;
`;
const Label = styled(Span)`
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0.5px;
  margin-bottom: 5px;
`;
const Percentage = styled(Span)`
  font-size: 20px;
  letter-spacing: 0.5px;
`;

const StatisticsItem = ({ label, percentage, color }) => (
  <ListItem color={color}>
    <Label>{label}</Label>
    <Percentage>{percentage}%</Percentage>
  </ListItem>
);

StatisticsItem.defaultProps = { label: '', percentage: 0 };
StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default StatisticsItem;
