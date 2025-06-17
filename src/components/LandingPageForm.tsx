import { useForm, FormProvider } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material";
import {
  defaultHeader,
  defaultFooter,
  defaultMain,
} from "../configs/formFields";
import type { SectionType } from "../configs/formFields";

import { HeaderForm } from "./HeaderForm";
import { FooterForm } from "./FooterForm";
import { SectionsForm } from "./SectionsForm";
import axios from "axios";

type FormValues = {
  name: string;
  title: string;
  description: string;
  keywords: string;
  domain: string;
  author: string;
  email: string;
  base_font_family: string;
  fonts_link: string;
  color_vars: string;
  sections: SectionType[];
  header: typeof defaultHeader;
  footer: typeof defaultFooter;
};

export default function LandingPageForm() {
  const methods = useForm({
    defaultValues: {
      name: defaultMain.name,
      title: defaultMain.title,
      description: defaultMain.description,
      keywords: defaultMain.keywords,
      domain: defaultMain.domain,
      author: defaultMain.author,
      email: defaultMain.email,
      base_font_family: defaultMain.base_font_family,
      fonts_link: defaultMain.fonts_link,
      color_vars: defaultMain.color_vars,
      header: defaultHeader,
      footer: defaultFooter,
      sections: [],
    },
  });

  const { register, handleSubmit } = methods;

  const onSubmit = async (data: FormValues) => {
    console.log(JSON.stringify(data, null, 2));
    try {
      const response = await axios.post(
        "http://localhost:3001/api/generate",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Success:", response.data);
      alert("Форму надіслано успішно!");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error:", error.response?.data || error.message);
      alert("Помилка при надсиланні форми");
    }
  };

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} p={4}>
        <Typography variant="h4" mb={2}>
          Landing Page Generator
        </Typography>

        <TextField
          label="Name"
          {...register("name")}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Title"
          {...register("title")}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          {...register("description")}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Keywords"
          {...register("keywords")}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Domain"
          {...register("domain")}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Author"
          {...register("author")}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          {...register("email")}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Base font family"
          {...register("base_font_family")}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Fonts"
          {...register("fonts_link")}
          fullWidth
          margin="normal"
          multiline
          minRows={4}
        />
        <TextField
          label="Color variables"
          {...register("color_vars")}
          fullWidth
          margin="normal"
          multiline
          minRows={4}
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
