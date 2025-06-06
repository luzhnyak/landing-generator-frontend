import { Box, Button, TextField, Typography } from "@mui/material";
import { useFieldArray, useFormContext } from "react-hook-form";

import type { FormData } from "../configs/formFields";

export const FAQItemsForm = ({ sectionIndex }: { sectionIndex: number }) => {
  const { control, register } = useFormContext<FormData>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: `sections.${sectionIndex}.items` as const,
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
              `sections.${sectionIndex}.items.${featureIndex}.answer`
            )}
          />
          <TextField
            label="Content"
            {...register(
              `sections.${sectionIndex}.items.${featureIndex}.question`
            )}
          />
          <Button
            onClick={() => remove(featureIndex)}
            variant="outlined"
            color="error"
          >
            Remove Question
          </Button>
        </Box>
      ))}

      <Button
        onClick={() => append({ answer: "", question: "" })}
        variant="outlined"
      >
        + Add Question
      </Button>
    </Box>
  );
};
