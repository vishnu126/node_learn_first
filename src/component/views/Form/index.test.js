import React from "react";
import { shallow } from "enzyme";
import Form from "./index"


const FormWrapper = shallow(
    <Form inputError={["data"]} formData={{
        password: "Vishnu",
        reTypePassword: "Vishnu",
        description: "Vishnu"
    }}
    showPassword={jest.fn()}
    />
)

describe("test cases", () => {
    it("component must be defined", () => {
        expect(FormWrapper.instance()).toBeDefined();
    })

    it("simulate onchange handler ", () => {
        let event = {
            target: {
                value: "abc"
            }
        };
        let changeArray = ["#password", "#reTypePassword", "#description"]
        changeArray.forEach(item => {
            return FormWrapper.find(item).first().simulate("change", event);
        })
    })
   
})