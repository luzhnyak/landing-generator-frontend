import { Box, Button, TextField, Typography } from "@mui/material";
import { useFieldArray, useFormContext } from "react-hook-form";

import type { FormData } from "../configs/formFields";

export const GalleryItemsForm = ({
  sectionIndex,
  sectionId,
}: {
  sectionIndex: number;
  sectionId: string;
}) => {
  const { control, register } = useFormContext<FormData>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: `sections.${sectionIndex}.galleryItems` as const,
  });

  return (
    <Box mt={2}>
      <Typography variant="subtitle2" mb={1}>
        Gallery Items
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
              `sections.${sectionIndex}.galleryItems.${featureIndex}.title`
            )}
          />
          <TextField
            label="Text"
            {...register(
              `sections.${sectionIndex}.galleryItems.${featureIndex}.text`
            )}
          />
          <TextField
            label="Image URL"
            {...register(
              `sections.${sectionIndex}.galleryItems.${featureIndex}.image`
            )}
          />
          <Button
            onClick={() => remove(featureIndex)}
            variant="outlined"
            color="error"
          >
            Remove item
          </Button>
        </Box>
      ))}

      <Button
        onClick={() =>
          append({
            title: "",
            text: "",
            image: `/img/${sectionId}-${fields.length + 1}.png`,
          })
        }
        variant="outlined"
      >
        + Add item
      </Button>
    </Box>
  );
};
