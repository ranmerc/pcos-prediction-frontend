import { Stack, Container, Typography } from "@mui/material";
import FormikForm from "../components/FormikForm";
import Head from "next/head";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Home = () => {
  return (
    <>
      <Head>
        <title>PCOS Prediction</title>
      </Head>
      <Container maxWidth="md">
        <Stack alignItems="center" marginTop={4} marginBottom={4} rowGap={5}>
          <Typography variant="h2" textAlign={"center"} letterSpacing={"1px"}>
            PCOS Prediction
          </Typography>
          <QueryClientProvider client={queryClient}>
            <FormikForm />
          </QueryClientProvider>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
