import { Box, Container, Stack, Typography } from "@mui/material";
import { getMonthYear } from "../Common";
import cvproperties from '../../cvproperties.json';

const flexStyle = { display: "flex", alignItems: "center", flexDirection: "column" };

function Experience(props) {
  const getStages = (stages) => {
    return stages.map((stage) => {
      const dateFrom = getMonthYear(stage.dateFrom);
      const dateTo = getMonthYear(stage.dateTo);
      return (
        <Typography key={stage.jobTitle}>
          {stage.jobTitle} — {dateFrom} - {dateTo}
        </Typography>
      );
    });
  };

  const getHighlights = (highlights) => {
    return highlights.map((highlight, idx) => {
      return (
        <li key={`hlt-${idx}`} style={{ marginBottom: "0.5em" }}>
          <Typography>{highlight}</Typography>
        </li>
      );
    });
  };

  const getJobHistory = (jobHistory) => {
    return jobHistory.map((job) => {
      let titleDateString = null;

      if (job.dateFrom && job.dateTo) {
        titleDateString = ` — ${getMonthYear(job.dateFrom)} - ${getMonthYear(job.dateTo)}`;
      }

      return (
        <Box key={job.title} sx={{ ...flexStyle, paddingY: 1.5 }}>
          <Typography variant="h6" fontWeight={500}>{job.title}{titleDateString}</Typography>
          {job.stages &&
            <Box sx={flexStyle}>
              {getStages(job.stages)}
            </Box>
          }
          <Typography paddingY={1} textAlign="justify">
            {job.statement}
          </Typography>
          {job.highlights &&
            <>
              {cvproperties.experienceSection.showHighlightTitle &&
                <Typography paddingTop={2} variant="h7" fontWeight={500} color="primary">Highlights</Typography>
              }
              <ul>
                {getHighlights(job.highlights)}
              </ul>
            </>
          }
        </Box>
      );
    });
  };

  return (
    <Container disableGutters sx={{ paddingX: 2, marginTop: 2 }}>
      <Stack spacing={1} direction="column" alignItems="center">
        {getJobHistory(props.experience)}
      </Stack>
    </Container>
  );
}

export default Experience;
