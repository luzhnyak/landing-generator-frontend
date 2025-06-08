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
    name: `sections.${sectionIndex}.featureItems` as const,
  });

  return (
    <Box mt={2}>
      <Typography variant="subtitle2" mb={1}>
        Feature Items
      </Typography>
      {fields.map((field, featureIndex) => (
        <Box
          key={field.id}
          display="flex"
          flexDirection="column"
          gap={2}
          mb={2}
          border="1px solid #ccc"
          borderRadius={2}
          p={2}
        >
          <TextField
            label="Title"
            {...register(
              `sections.${sectionIndex}.featureItems.${featureIndex}.title`
            )}
          />
          <TextField
            label="Content"
            {...register(
              `sections.${sectionIndex}.featureItems.${featureIndex}.content`
            )}
          />
          <TextField
            label="Image URL"
            {...register(
              `sections.${sectionIndex}.featureItems.${featureIndex}.image`
            )}
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
