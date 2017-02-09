/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import ReactElectrodeTest from "src/components/react-electrode-test";

describe("components/react-electrode-test", () => {

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<ReactElectrodeTest />);
      expect(component).to.not.be.null;
    });

  });

});
