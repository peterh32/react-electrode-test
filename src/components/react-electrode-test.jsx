import React from "react";

import styles from "../../src/styles/react-electrode-test.css";

export default class ReactElectrodeTest extends React.Component {
  render() {
    return (
      <div className={styles.someStyle}>
        {1==1 ? 'Math Works!' : 'no it doesnt'}
      </div>
    );
  }
}

ReactElectrodeTest.displayName = "ReactElectrodeTest";

ReactElectrodeTest.propTypes = {};

ReactElectrodeTest.defaultProps = {};
