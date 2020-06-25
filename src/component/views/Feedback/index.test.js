import React from "react";
import { shallow } from "enzyme";
import {Success, Error} from "./index"

const SuccessWrapper = shallow(
    <Success
    />
)

const ErrorWrapper = shallow(
    <Error
    />
)

describe("test cases", () => {
    it("component must be defined", () => {
        expect(SuccessWrapper.instance()).toBeDefined();
    })

    it("component must be defined", () => {
        expect(ErrorWrapper.instance()).toBeDefined();
    })
})