import React from "react";
import { shallow } from "enzyme";
import App from "./App"


const AppWrapper = shallow(
    <App validteInput={jest.fn()}  />
)

describe("test cases", () => {
    it("component must be defined", () => {
        expect(AppWrapper.instance()).toBeDefined();
    })
    
    it("validteInput must be defined", () => {
        const value = "Vishnu"
        const name = "sharma"
        expect(AppWrapper.instance().validteInput(value, name)).toBe();
    })
    
    it("matchPattern must be defined", () => {
        const value = "Vishnu"
        expect(AppWrapper.instance().matchPattern(value)).toBeDefined();
    })

    it("onClickNext must be defined", () => {
        expect(AppWrapper.instance().onClickNext()).toBe();
    })

    it("goToNext must be defined", () => {
        expect(AppWrapper.instance().goToNext()).toBe();
    })
})
