import React from "react";
import Button from "material-ui/Button";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import Divider from "material-ui/Divider";
import List, { ListItem, ListItemText } from "material-ui/List";
import Drawer from "material-ui/Drawer";
import FontAwesome from "react-fontawesome";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
});

const style = {
  navButton: {
    backgroundColor: "rgba(237, 124, 49, 0.931)",
    width: "10px"
  }, 
};

class MobileDrawerBase extends React.Component {
  state = {
    open: false
  };

  toggleDrawer = () => {
    this.setState(prevProps => ({
      open: !prevProps.open
    }));
  };

  render() {
    const { classes } = this.props;
    const sideList = (
      <div>
        <List className="navList">
          <ListItem key={"brandName"}>
            <ListItemText primary={"Xelectric"} />
          </ListItem>
          <Divider />
          {["Home", "Products and Services", "Contact Us"].map(item => (
            <ListItem button key={`item-${item}`}>
              <ListItemText primary={`${item}`} />
            </ListItem>
          ))}
        </List>
      </div>
    );
    return (
      <div>
        <div className={'drawerButton'}>
          <Button onClick={this.toggleDrawer} className={classes.hamburger}>
            <FontAwesome
              className="fa-bars"
              size="2x"
              style={{
                color: "#ED7D31",
                textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)"
              }}
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

const MobileDrawer = withStyles(styles)(MobileDrawerBase);

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
