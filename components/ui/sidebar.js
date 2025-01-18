
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Box } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import EmailIcon from "@mui/icons-material/Email";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function Sidebar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const router = useRouter();

  const chemindepot = () =>{
    router.push("/depot");
  }
  const cheminretrait = () =>{
    router.push("/retrait");
  }

  const handleLogout = () => {
    // Effacer les informations utilisateur (exemple : localStorage)
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");

    // Rediriger vers la page de connexion
    router.push("/login");
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {/* Bouton Menu pour ouvrir/fermer le Sidecar */}
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer}
        sx={{ fontSize: "1.8rem" }}
      >
        {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>

      {/* Drawer (Barre latérale) */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            backgroundColor: "#f5f5f5",
          }}
        >
          <List>
            {/* Options de menu */}
            
            <ListItem button>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary="Changer la langue" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SportsEsportsIcon />
              </ListItemIcon>
              <ListItemText primary="Mes Paris" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItem>
            <ListItem type = 'button' onClick={chemindepot }>
                
              <ListItemIcon>
                <AccountBalanceWalletIcon />
              </ListItemIcon>
              <ListItemText primary="Dépôt" />
              
            </ListItem>
            <ListItem type = 'button' onClick={cheminretrait }>
              <ListItemIcon>
                <AccountBalanceWalletIcon />
              </ListItemIcon>
              <ListItemText primary="Retrait" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AccountBalanceWalletIcon />
              </ListItemIcon>
              <ListItemText primary="Relevé" />
            </ListItem>
            <ListItem type='button'  onClick={handleLogout}
      style={{
        padding: "10px 20px",
        backgroundColor: "#f44336",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Se déconnecter" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
