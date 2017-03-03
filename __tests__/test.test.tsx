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

