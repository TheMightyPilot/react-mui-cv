import { Container, Stack, Typography } from "@mui/material";
import { SectionHeader } from "../Common";

function Qualities(props) {
  return (
    <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
    <SectionHeader>Personal Qualities</SectionHeader>
      <Stack spacing={1} direction="column" alignItems="center">
        {props.qualities.map((quality) => (
          <Typography key={quality} textAlign="center">{quality}</Typography>
        ))}
      </Stack>
    </Container>
  );
}

export default Qualities;
