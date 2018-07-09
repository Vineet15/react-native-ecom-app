import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Account from "./Account";
import { logout } from "src/action";

class AccountContainer extends PureComponent {
  render() {
    return <Account {...this.props} />;
  }
}

const mapStateToProps = ({ user }) => {
  const { email, name, token } = user;
  return { email, name, token };
};

export default connect(
  mapStateToProps,
  { logout }
)(AccountContainer);
