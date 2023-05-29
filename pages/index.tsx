import { Stack, Container, Typography } from "@mui/material";
import FormikForm from "../components/FormikForm";

const Home = () => {
  return (
    <Container maxWidth="md">
      <Stack alignItems="center" marginTop={4} marginBottom={4} rowGap={5}>
        <Typography variant="h2" textAlign={"center"} letterSpacing={"1px"}>
          PCOS Prediction
        </Typography>
        <FormikForm />
      </Stack>
    </Container>
  );
};

export default Home;
