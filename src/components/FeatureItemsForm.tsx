import { Box, Button, TextField, Typography } from "@mui/material";
import { useFieldArray, useFormContext } from "react-hook-form";

import type { FormData } from "../configs/formFields";

export const FeatureItemsForm = ({
  sectionIndex,
}: {
  sectionIndex: number;
}) => {
  const { control, register } = useFormContext<FormData>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: `sections.${sectionIndex}.features` as const,
  });

  return (
    <Box mt={2}>
      <Typography variant="subtitle2">Feature Items</Typography>
      {fields.map((field, featureIndex) => (
        <Box
          key={field.id}
          display="flex"
          flexDirection="column"
          gap={1}
          mb={2}
        >
          <TextField
            label="Title"
            {...register(
              `sections.${sectionIndex}.features.${featureIndex}.title`
            )}
            margin="normal"
          />
          <TextField
            label="Content"
            {...register(
              `sections.${sectionIndex}.features.${featureIndex}.content`
            )}
            margin="normal"
          />
          <TextField
            label="Image URL"
            {...register(
              `sections.${sectionIndex}.features.${featureIndex}.image`
            )}
            margin="normal"
          />
          <Button
            onClick={() => remove(featureIndex)}
            variant="outlined"
            color="error"
          >
            Remove Feature
          </Button>
        </Box>
      ))}

      <Button
        onClick={() => append({ title: "", content: "", image: "" })}
        variant="outlined"
      >
        + Add Feature Item
      </Button>
    </Box>
  );
};
