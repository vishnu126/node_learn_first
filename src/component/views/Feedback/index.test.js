import React from "react";
import { shallow } from "enzyme";
import { Feedback} from "./index"

const FeedbackWrapper = shallow(
    <Feedback status={{}}
    />
)

describe("test cases", () => {
    it("component must be defined", () => {
        expect(FeedbackWrapper.instance()).toBeDefined();
    })
})