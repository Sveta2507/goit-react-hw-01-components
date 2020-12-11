import React from "react";
import PropTypes, { object } from "prop-types";
import Profile from "./js/components/Profile/Profile.js";
import Statistics from "./js/components/Statistics/Statistics.js";
import Friends from "./js/components/Fiends/Friends.js";
import Transactions from "./js/components/Transactions/Transaction.js";

const App = ({ user, statistics, friends, transactions, noAvatar }) => {
  const { name, tag, location, avatar, stats } = user;
  return (
    <div>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
        noAvatar={noAvatar}
      />
      <Statistics title="Upload stats" statistics={statistics} />
      <Friends friends={friends} noAvatar={noAvatar} />
      {<Transactions transactions={transactions} />}
    </div>
  );
};

export default App;

App.propTypes = {
  friends: PropTypes.arrayOf(object).isRequired,
  statistics: PropTypes.arrayOf(object).isRequired,
  transactions: PropTypes.arrayOf(object).isRequired,
  user: PropTypes.object.isRequired,
  noAvatar: PropTypes.string.isRequired,
};
