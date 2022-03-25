import React from "react";
import TextBox from "./TextBox";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

class MyErrorBoundary extends React.Component {
  state = {
    errorMessage: "",
  };

  static getDerivedStateFromError(error) {
    return { errorMessage: error.toString() };
  }

  componentDidCatch(error, info) {
    this.logErrorToServices(error.toString(), info.componentStack);
    clearAllBodyScrollLocks(document);
  }

  // A fake logging service.
  logErrorToServices = console.log;

  render() {
    if (this.state.errorMessage) {
      clearAllBodyScrollLocks(document);
      return (
        <TextBox type={"warning"}>
          Something went terribly wrong. {this.props.component} module could not
          be loaded. Please refresh the page or contact us.
        </TextBox>
      );
    }
    return this.props.children;
  }
}

export default MyErrorBoundary;
