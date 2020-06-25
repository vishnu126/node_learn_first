import React from "react";
import { shallow } from "enzyme";
import Form from "./index"


const FormWrapper = shallow(
    <Form inputError={["data"]}
    />
)

describe("test cases", () => {
    it("component must be defined", () => {
        expect(FormWrapper.instance()).toBeDefined();
    })
})