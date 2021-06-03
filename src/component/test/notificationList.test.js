import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import NotificationList from "../notificationList";
import { details } from "../../assets/notificationDetails";

function getWrapper(props) {
  return mount(<NotificationList {...props} />);
}

describe("snapshot <NotificationList>", () => {
  it("should match snapshot testing with notification list", () => {
    const wrapper = getWrapper({
      list: details
    });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

it("check notification list loaded or not", () => {
  const wrapper = getWrapper({
    list: details
  });
  expect(wrapper.find("notiSection").length).toEqual(7);
});
