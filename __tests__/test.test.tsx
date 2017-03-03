import * as React from "react";
import * as TestUtils from "react-addons-test-utils";
import renderer from 'react-test-renderer';

import { Form } from "../src/components/Form";

describe("<Form />", () => {
  it("renders", () => {
    expect(TestUtils.createRenderer().render(
      <Form />  
    )).toMatchSnapshot();
  });
});

describe("<Form /> onSubmit()", () => {
  const component = renderer.create(<Form />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  let button = tree.find(".tester");
  console.log(button); 
  /*TestUtils.Simulate.click(button);
  tree = component.toJSON();
  expect(tree).toMatchSnapshot().toBe(false);
  */
});
