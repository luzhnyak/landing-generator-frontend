import { Box, Button, TextField, Typography } from "@mui/material";
import { useFieldArray, useFormContext } from "react-hook-form";

import type { FormData } from "../configs/formFields";

export const ReviewsItemsForm = ({
  sectionIndex,
}: {
  sectionIndex: number;
}) => {
  const { control, register } = useFormContext<FormData>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: `sections.${sectionIndex}.reviewItems` as const,
  });

  return (
    <Box mt={2}>
      <Typography variant="subtitle2" mb={1}>
        Reviews Items
      </Typography>
      {fields.map((field, reviewIndex) => (
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
            label="User"
            {...register(
              `sections.${sectionIndex}.reviewItems.${reviewIndex}.user`
            )}
          />
          <TextField
            label="Message"
            {...register(
              `sections.${sectionIndex}.reviewItems.${reviewIndex}.message`
            )}
          />
          <TextField
            label="Avatar"
            {...register(
              `sections.${sectionIndex}.reviewItems.${reviewIndex}.avatar`
            )}
          />
          <Button
            onClick={() => remove(reviewIndex)}
            variant="outlined"
            color="error"
          >
            Remove Review
          </Button>
        </Box>
      ))}

      <Button
        onClick={() => append({ user: "", message: "", avatar: "" })}
        variant="outlined"
      >
        + Add Review Item
      </Button>
    </Box>
  );
};
