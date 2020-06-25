import React from "react";
import { shallow } from "enzyme";
import Header from "./Header"


const HeaderWrapper = shallow(
    <Header
    />
)

describe("test cases", () => {
    it("component must be defined", () => {
        expect(HeaderWrapper.instance()).toBeDefined();
    })
})