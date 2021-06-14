import { Typography, AppBar, Toolbar } from "@material-ui/core";

const Menu = () => {
  return (
    <AppBar data-testid="menu" position="relative" color="transparent">
      <Toolbar>
        <Typography variant="h6">Reduc</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
