import { useForm, FormProvider } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material";
import { defaultHeader, defaultFooter } from "../configs/formFields";
import type { SectionType } from "../configs/formFields";

import { HeaderForm } from "./HeaderForm";
import { FooterForm } from "./FooterForm";
import { SectionsForm } from "./SectionsForm";

type FormValues = {
  name: string;
  description: string;

  sections: SectionType[];
  header: typeof defaultHeader;
  footer: typeof defaultFooter;
};

export default function LandingPageForm() {
  const methods = useForm({
    defaultValues: {
      name: "",
      description: "",
      header: defaultHeader,
      footer: defaultFooter,
      sections: [],
    },
  });

  const { register, handleSubmit } = methods;

  const onSubmit = (data: FormValues) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} p={4}>
        <Typography variant="h4" mb={2}>
          Landing Page Generator
        </Typography>

        <TextField
          label="Site Name"
          {...register("name")}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          {...register("description")}
          fullWidth
          margin="normal"
        />

        <HeaderForm />
        <FooterForm />
        <SectionsForm />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 4 }}
        >
          Submit
        </Button>
      </Box>
    </FormProvider>
  );
}
