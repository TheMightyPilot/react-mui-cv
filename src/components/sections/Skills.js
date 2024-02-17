import { Chip, Container, Stack } from "@mui/material";
import { SectionHeader } from "../Common";

function Skills(props) {
  return (
    <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <SectionHeader>Skills</SectionHeader>
      <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap">
        {props.skills.map((skill) => (
          <Chip
            key={skill}
            color="secondary"
            size="small"
            label={skill}
            sx={{ flexGrow: 1 }}
          />
        ))}
      </Stack>
    </Container>
  );
}

export default Skills;
