import React, { useState, useEffect } from "react";
import FilterSection from "./filterComponent";
import NotificationList from "./notificationList";
import { details } from "../assets/notificationDetails";

const NotificationSection = () => {
  const [notificationList, setNotificationList] = useState([]);
  const [loader, setLoader] = useState(false);
  // loader = true;
  const notificationAPI = async () => {
    setLoader(true);
    let apiCall = await fetch(
      "https://d5540f82-1fd0-4e16-a8db-8687bfe2c7ce.mock.pstmn.io/notifications"
    );
    if (!apiCall.ok) {
      const message = `An error has occured: ${apiCall.status}`;
      throw new Error(message);
    }
    let response = await apiCall.json();
    return response;
  };

  useEffect(() => {
    notificationAPI()
      .then((data) => {
        setLoader(false);
        setNotificationList(data);
      })
      .catch((err) => {
        setLoader(false);
        setNotificationList(details);
      });
  }, []);

  const filterWithActive = (isActive) => {
    if (isActive) {
      let activeList = notificationList.filter((item) => {
        return item.active === true;
      });
      setNotificationList(activeList);
    } else {
      setNotificationList(details);
    }
  };

  const searchWithWord = (toSearch) => {
    let results = [];
    for (var i = 0; i < notificationList.length; i++) {
      if (notificationList[i]["information"].indexOf(toSearch) != -1) {
        results.push(notificationList[i]);
      }
    }
    setNotificationList(() => (results.length > 0 ? results : details));
  };

  const resetSearch = () => {
    setNotificationList(details);
  };

  return (
    <div className="NotificationSection">
      {loader ? (
        <div>Loading....</div>
      ) : (
        <>
          <FilterSection
            activeFilter={filterWithActive}
            searchWithWord={searchWithWord}
            resetSearch={resetSearch}
          />
          <NotificationList list={notificationList}></NotificationList>
        </>
      )}
    </div>
  );
};

export default NotificationSection;
