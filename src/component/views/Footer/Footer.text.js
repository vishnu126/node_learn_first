import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer"


const footerWrapper = shallow(
    <Footer
    />
)

describe("test cases", () => {
    it("component must be defined", () => {
        expect(footerWrapper.instance()).toBeDefined();
    })
})