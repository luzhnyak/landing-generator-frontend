import { Container } from "@mui/material";
import LandingPageForm from "./LandingPageForm";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Container maxWidth="md">
      <LandingPageForm />
      <ToastContainer />
    </Container>
  );
}

export default App;
