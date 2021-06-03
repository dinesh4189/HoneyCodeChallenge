import React from "react";

const NotificationList = (props) => {
  const listSection = () =>
    props.list.map((item, index) => {
      return (
        <div className={item.color + " notiSection"} key={item.date}>
          <span>{item.date}</span>
          <h4>{item.information}</h4>
        </div>
      );
    });
  return <>{listSection()}</>;
};

export default NotificationList;
