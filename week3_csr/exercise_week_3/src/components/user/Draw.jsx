
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';


export default function Draw({variant, open, onClose, drawerWidth}) {
  return (
    <Drawer 
      variant={variant}
      open={open}
      onClose={onClose}
      sx={{
        flexShrink: 0, // Prevents the drawer from shrinking
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar /> {/* Espaciador para que el contenido no quede bajo AppBar */}
      <List>
        {['Dashboard', 'Users', 'Settings'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    
    </Drawer>
  );
}