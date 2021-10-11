import React from "react";
import moment from "moment";

export default (props) => {
const date = moment().diff(props.birthDate, "years");
  return (
    <div className="greeting">
      My name is {props.firstName} {props.lastName}. I'm {date} years
      old
    </div>
  );
};
