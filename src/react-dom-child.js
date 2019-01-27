import React from "react";
import "child-replace-with-polyfill";
import createRef from "react-create-ref";
/*
 Wrapper class to wrap the raw html nodes in a 
 react component before passing it down to react as children
*/
export class ReactDomChild extends React.Component {
  ref = createRef();
  componentDidMount() {
    const children = this.props.children || [];
    this.ref.current.replaceWith(...children);
  }
  render() {
    return <div ref={this.ref} />;
  }
}
