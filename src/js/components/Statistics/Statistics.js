import React from "react";
import PropTypes from "prop-types";
import StatisticItem from "./StatisticsItem";
import hexColor from "../../additional/hexColor";
import classes from "./Statistics.module.css";

const Statistics = ({ statistics, title }) => (
  <section className={classes.section}>
    <div className={classes.wrapper}>
      <h2 className={classes.title} /*titleText={title}*/>
        {title}
      </h2>
      <ul className={classes.statList}>
        {statistics.map(({ label, percentage, id }) => (
          <StatisticItem
            label={label}
            percentage={percentage}
            key={id}
            color={hexColor()}
          />
        ))}
      </ul>
    </div>
  </section>
);

Statistics.propTypes = {
  statistics: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
};

export default Statistics;
