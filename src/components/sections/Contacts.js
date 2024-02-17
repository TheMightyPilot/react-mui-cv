import { Box, Container, Typography } from "@mui/material";
import {
  Phone,
  EmailOutlined,
  LanguageOutlined,
  PlaceOutlined
} from "@mui/icons-material";
import { LinkedIn } from "../Common";

function Contacts(props) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "email":
        return <EmailOutlined color="primary" fontSize="large" />;
      case "phone":
        return <Phone color="primary" fontSize="large" />;
      case "linkedin":
        return <LinkedIn color="primary" fontSize="large" />;
      case "website":
        return <LanguageOutlined color="primary" fontSize="large" />;
      case "location":
        return <PlaceOutlined color="primary" fontSize="large" />;
      default:
        break;
    }
  };

  const getContacts = (contacts) => {
    return Object.keys(contacts).map((contactKey) => {
      return (
        <Box key={contactKey} sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingY: 0.5
        }}>
          <Box sx={{ paddingY: 0.5 }}>
            {getIcon(contactKey)}
          </Box>
          <Typography textAlign="center" maxWidth="90%">{contacts[contactKey]}</Typography>
        </Box>
      );
    })
  };

  return (
    <Container disableGutters>
      {getContacts(props.contacts)}
    </Container>
  );
}

export default Contacts;
