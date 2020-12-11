import React from "react";
import ReactDOM from "react-dom";
import user from "./data/user.json";
import statistics from "./data/statistics.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import "./css/base.css";
import App from "./App";

const NO_IMAGE_URL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png";

ReactDOM.render(
  <React.StrictMode>
    <App
      user={user}
      statistics={statistics}
      friends={friends}
      transactions={transactions}
      noAvatar={NO_IMAGE_URL}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
