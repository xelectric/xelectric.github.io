import React from "react";
import Button from "material-ui/Button";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import Divider from "material-ui/Divider";
import List from "material-ui/List";
import Drawer from "material-ui/Drawer";
import FontAwesome from "react-fontawesome";

class MobileDrawer extends React.Component {
  state = {
    open: false
  };

  toggleDrawer = () => {
    this.setState(prevProps => ({
      open: !prevProps.open
    }));
  };

  render() {
    const sideList = (
      <div>
        <List>{["mailFolderListItems"]}</List>
        <Divider />
        <List>{["otherMailFolderListItems"]}</List>
      </div>
    );
    return (
      <div>
        <div className="drawerButton">
          <Button onClick={this.toggleDrawer}>
            <FontAwesome
              className="fa-bars"
              size="2x"
            />
          </Button>
        </div>
        <Drawer open={this.state.open} onRequestClose={this.toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

const style = {
  navButton: {
    backgroundColor: "rgba(237, 124, 49, 0.931)",
    height: "30px"
  }
};

const NavBar = () => (
  <div>
    <div className="mobileNav">
      <MobileDrawer />
    </div>
    <div className="nav">
      <div className="navContainer">
        <Button style={style.navButton} raised color={"contrast"}>
          <b>Home</b>
        </Button>
        <Button style={style.navButton} raised color={"contrast"}>
          <b>Products And Services</b>
        </Button>
        <Button style={style.navButton} raised color={"contrast"}>
          <b>Contact Us</b>
        </Button>
      </div>
    </div>
  </div>
);

export default NavBar;
