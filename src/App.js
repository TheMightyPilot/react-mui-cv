import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { BorderBox } from "./components/Common";
import Contacts from "./components/sections/Contacts";
import cvdata from "./cvdata.json";
import cvproperties from "./cvproperties.json";
import Skills from "./components/sections/Skills";
import Qualities from "./components/sections/Qualities";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";

function App() {
  return (
    <Container maxWidth="md" sx={{ marginTop: 2 }}>
      <Paper elevation={5} sx={{ padding: 1 }}>
        <Box sx={{ bgcolor: "secondary.main", height: 20, marginBottom: 1 }} />
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <BorderBox>
              <Typography variant="h4" fontWeight={700} paddingY={1}>{cvdata.name}</Typography>
              <Typography variant="subtitle1" fontWeight={500}>D.O.B: {cvdata.dateOfBirth}</Typography>
            </BorderBox>
            <Contacts contacts={cvdata.contact} />
            <BorderBox>
              <Skills skills={cvdata.skills} />
              <div className="pagebreak" />
            </BorderBox>
            <Qualities qualities={cvdata.personalQualities} />
          </Grid>
          <Grid item xs={8}>
            <BorderBox padding={1}>
              <Typography variant="h5" fontWeight={500}>Experience</Typography>
            </BorderBox>
            <Experience experience={cvdata.jobHistory} />
            <BorderBox padding={1}>
              <Typography variant="h5" fontWeight={500}>Education</Typography>
            </BorderBox>
            <Education education={cvdata.education} />
            {cvdata.volunteerExperience &&
              <>
                <BorderBox padding={1}>
                  <Typography variant="h5" fontWeight={500}>
                    {cvproperties.volunteeringSection.title ? cvproperties.volunteeringSection.title : "Volunteer Experience"}
                  </Typography>
                </BorderBox>
                {cvproperties.volunteeringSection.format === "education" ?
                  <Education education={cvdata.volunteerExperience} /> :
                  <Experience experience={cvdata.volunteerExperience} />
                }
              </>
            }
          </Grid>
        </Grid>
        <Box sx={{ bgcolor: "secondary.main", height: 20, marginTop: 1 }} />
      </Paper>
    </Container>
  );
}

export default App;
