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
import { toast } from "react-toastify";
import { useEffect } from "react";

const STORAGE_KEY = "landingPageFormData";

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
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedData = savedData ? JSON.parse(savedData) : null;

  const defaultFormValues: FormValues = {
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
  };

  const methods = useForm({
    defaultValues: parsedData || defaultFormValues,
    shouldUnregister: false,
  });

  console.log(parsedData);

  const { watch } = methods;

  const { register, handleSubmit } = methods;

  const onSubmit = async (data: FormValues) => {
    // console.log(JSON.stringify(data, null, 2));
    try {
      const response = await axios.post(
        "http://localhost:3001/api/generate",
        data,
        {
          headers: {
            "Text-Type": "application/json",
          },
          responseType: "blob",
        }
      );
      console.log("Success:", response.data);
      toast.success("Форму надіслано успішно!");

      const blob = new Blob([response.data], { type: "application/zip" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `${data.name}.zip`;
      link.click();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.response?.data || error.message);
    }
  };

  useEffect(() => {
    console.log("Watching form values");

    const subscription = watch((value) => {
      console.log("values", value);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

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
          sx={{ mt: 2 }}
        >
          Submit
        </Button>

        <Button
          variant="outlined"
          color="secondary"
          sx={{ mt: 2, ml: 2 }}
          onClick={() => {
            localStorage.removeItem("landingPageFormData");
            methods.reset(defaultFormValues);
            toast.info("Форму очищено");
          }}
        >
          Очистити форму
        </Button>
      </Box>
    </FormProvider>
  );
}
