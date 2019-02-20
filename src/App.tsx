import React from "react";
import "./App.css";
import { observable } from "mobx";
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";

@observer
class TestWithParentAssign extends React.Component<{}> {
  @observable test = { a: 1, b: 2, c: 3 };
  onButtonClick = () => {
    this.test = { ...this.test, a: 2 };
  };
  public render() {
    console.log("assigned parent", this.test);
    return (
      <div>
        <button onClick={this.onButtonClick}> Test with Assign parent </button>
        <span>Test to show that observerable causes a rerender</span>
      </div>
    );
  }
}
@observer
class NestedClass extends React.Component<any> {

  public render() {

    return (
        <span>
          Test to show that assigning to child attribute of observerable Does
          not cause a rerender Test with assign child of {this.props.test}
        </span>
    );
  }
}

interface test {
  a?: number,
  b?: number,
  c?: number
}

@observer
class TestWithAsignAttribute extends React.Component<{}> {
  @observable test:test={};
  onButtonClick = () => {
    this.test.a = 2;
  };
  public render() {
    console.log("assigned a child of parent", this.test);
    return (
      <div>
        <button onClick={this.onButtonClick}>
          Test with assign child of {this.test.a}
        </button>
        <span>
          Test to show that assigning to child attribute of observerable Does
          not cause a rerender
    
        </span>
      </div>
    );
  }
}

class App extends React.Component<{}> {
  public render() {
    return (
      <div>
        <DevTools />
        <TestWithAsignAttribute />
        <hr />
        <TestWithParentAssign />
      </div>
    );
  }
}

export default App;
