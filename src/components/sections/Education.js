import { Box, Container, Stack, Typography } from "@mui/material";
import { getYear } from "../Common";

const flexStyle = { display: "flex", alignItems: "center", flexDirection: "column" };

function Education(props) {
  const getQualifications = (qLevel) => {
    return qLevel.qualifications.map((qualification) => {
      return (
        <li key={qualification.name}>
          <Typography variant="h7" fontWeight={500}>{qualification.name}{qualification.grade && ` - ${qualification.grade}`}</Typography>
        </li>
      );
    });
  };

  const getQualificationLevels = (qLevels) => {
    return qLevels.map((qLevel) => {
      return (
        <Box key={qLevel.type} sx={{ width: "90%" }}>
          <Typography variant="h7" fontWeight={500}>{qLevel.type}</Typography>
          {qLevel.qualifications &&
            <Box sx={{ width: "100%" }}>
              <ul>
                {getQualifications(qLevel)}
              </ul>
            </Box>
          }
        </Box >
      );
    });
  };

  const getEducation = (educationObjs) => {
    return educationObjs.map((eduObj) => {
      const dateFrom = getYear(eduObj.dateFrom);
      const dateTo = getYear(eduObj.dateTo);

      return (
        <Box key={eduObj.title} sx={{ ...flexStyle, width: "100%", paddingY: 1.5 }}>
          <Typography
            variant="h6"
            fontWeight={500}
            textAlign="center"
          >
            {eduObj.title} — {dateFrom} - {dateTo}
          </Typography>
          {getQualificationLevels(eduObj.qualificationLevels)}
        </Box>
      );
    });
  };

  return (
    <Container disableGutters sx={{ paddingX: 2, marginTop: 2 }}>
      <Stack spacing={1} direction="column" alignItems="center">
        {getEducation(props.education)}
      </Stack>
    </Container>
  );
}

export default Education;
