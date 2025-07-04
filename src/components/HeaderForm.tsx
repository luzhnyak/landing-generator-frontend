import { Box, Button, TextField, Typography } from "@mui/material";
import { useFieldArray, useFormContext } from "react-hook-form";
import type { FormData } from "../configs/formFields";

export const HeaderForm = () => {
  const { register, control } = useFormContext<FormData>();

  const { fields, remove, append } = useFieldArray({
    control,
    name: "header.links",
  });

  return (
    <Box>
      <Typography variant="h5" mt={4}>
        Header
      </Typography>
      <Box p={2} border="1px solid #ccc" borderRadius={2} mb={2}>
        <TextField
          label="Logo URL"
          {...register("header.logoUrl")}
          fullWidth
          margin="normal"
        />

        <Typography variant="h6">Header Links</Typography>
        {fields.map((item, index) => (
          <Box key={item.id} display="flex" gap={1} mb={1}>
            <TextField
              label="Href"
              {...register(`header.links.${index}.href`)}
            />
            <TextField
              label="Label"
              {...register(`header.links.${index}.label`)}
            />
            <Button
              onClick={() => remove(index)}
              color="error"
              variant="outlined"
            >
              Remove
            </Button>
          </Box>
        ))}
        <Button
          onClick={() => append({ href: "/#", label: "" })}
          variant="text"
        >
          + Add Link
        </Button>
      </Box>
    </Box>
  );
};
