import React from "react";
import { shallow } from "enzyme";
import ProductInfo from "./index"


const ProductInfoWrapper = shallow(
    <ProductInfo
    />
)

describe("test cases", () => {
    it("component must be defined", () => {
        expect(ProductInfoWrapper.instance()).toBeDefined();
    })
})