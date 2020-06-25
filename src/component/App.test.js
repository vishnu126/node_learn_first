import React from "react";
import { shallow } from "enzyme";
import App from "./App"


const AppWrapper = shallow(
    <App 
    />
)

describe("test cases", () => {
    it("component must be defined", () => {
        expect(AppWrapper.instance()).toBeDefined();
    })
})
