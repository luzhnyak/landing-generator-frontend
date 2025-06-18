import { useFieldArray, useFormContext } from "react-hook-form";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import type { FormData } from "../configs/formFields";

export const FooterForm = () => {
  const { register, control } = useFormContext<FormData>();

  const footerLinks = useFieldArray({
    control,
    name: "footer.links",
  });

  return (
    <Box mb={4}>
      <Typography variant="h5" mt={4}>
        Footer
      </Typography>
      <Box p={2} border="1px solid #ccc" borderRadius={2} mb={2}>
        <TextField
          label="Footer Text"
          {...register("footer.text")}
          fullWidth
          margin="normal"
        />

        <FormControlLabel
          control={<Checkbox {...register("footer.social_link")} />}
          label="Show social link"
        />
        <Typography variant="h6" mt={2} mb={2}>
          Footer Links
        </Typography>
        {footerLinks.fields.map((item, index) => (
          <Box key={item.id} display="flex" gap={1} mb={1}>
            <TextField
              label="Href"
              {...register(`footer.links.${index}.href`)}
            />
            <TextField
              label="Label"
              {...register(`footer.links.${index}.label`)}
            />
            <Button
              onClick={() => footerLinks.remove(index)}
              color="error"
              variant="outlined"
            >
              Видалити
            </Button>
          </Box>
        ))}

        <Button
          onClick={() => footerLinks.append({ href: "", label: "" })}
          variant="text"
        >
          + Додати посилання
        </Button>
      </Box>
    </Box>
  );
};
