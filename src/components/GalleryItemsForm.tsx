import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { useFieldArray, useFormContext } from "react-hook-form";

import type { FormData } from "../configs/formFields";

export const GalleryItemsForm = ({
  sectionIndex,
  sectionId,
}: {
  sectionIndex: number;
  sectionId: string;
}) => {
  const { control, register, setValue } = useFormContext<FormData>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: `sections.${sectionIndex}.galleryItems` as const,
  });

  const handleSetImageValue = (slideIndex: number) => {
    setValue(
      `sections.${sectionIndex}.galleryItems.${slideIndex}.image`,
      `/img/${sectionId}-${slideIndex + 1}.png`
    );
  };

  return (
    <Box mt={2}>
      <Typography variant="subtitle2" mb={1}>
        Gallery Items
      </Typography>
      {fields.map((field, slideIndex) => (
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
              `sections.${sectionIndex}.galleryItems.${slideIndex}.title`
            )}
          />
          <TextField
            label="Text"
            {...register(
              `sections.${sectionIndex}.galleryItems.${slideIndex}.text`
            )}
          />

          <TextField
            label="Image URL"
            {...register(
              `sections.${sectionIndex}.galleryItems.${slideIndex}.image`
            )}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => handleSetImageValue(slideIndex)}
                      edge="end"
                    >
                      <AutoFixHighIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              },
              inputLabel: {
                shrink: true,
              },
            }}
          />
          <Button
            onClick={() => remove(slideIndex)}
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
            image: ``,
          })
        }
        variant="outlined"
      >
        + Add item
      </Button>
    </Box>
  );
};
