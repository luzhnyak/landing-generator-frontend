import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormContext, useWatch } from "react-hook-form";
import { FeatureItemsForm } from "./FeatureItemsForm";
import { GalleryItemsForm } from "./GalleryItemsForm";
import { FAQItemsForm } from "./FAQItemsForm";

export const SectionItem = ({
  index,
  onRemove,
}: {
  index: number;
  onRemove: (index: number) => void;
}) => {
  const { control, register } = useFormContext();
  const type = useWatch({ control, name: `sections.${index}.type` });
  const sectionId = useWatch({ control, name: `sections.${index}.id` });

  return (
    <Box border="1px solid #ccc" borderRadius={2} p={2} mb={2}>
      <Typography variant="subtitle1">{type?.toUpperCase()} секція</Typography>

      <TextField
        fullWidth
        label="ID"
        {...register(`sections.${index}.id`)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Title"
        {...register(`sections.${index}.title`)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Subtitle"
        {...register(`sections.${index}.subtitle`)}
        margin="normal"
      />

      {type === "hero" && (
        <>
          <TextField
            fullWidth
            label="Image"
            {...register(`sections.${index}.image`)}
            margin="normal"
          />
        </>
      )}

      {type === "about" && (
        <>
          <TextField
            fullWidth
            label="Text"
            {...register(`sections.${index}.text`)}
            margin="normal"
            multiline
            minRows={4}
          />
          <TextField
            fullWidth
            label="Image"
            {...register(`sections.${index}.image`)}
            margin="normal"
          />
        </>
      )}
      {type === "features" && (
        <>
          <TextField
            fullWidth
            label="Text"
            {...register(`sections.${index}.text`)}
            margin="normal"
            multiline
            minRows={4}
          />
          <FeatureItemsForm sectionIndex={index} sectionId={sectionId} />
        </>
      )}
      {type === "gallery" && (
        <GalleryItemsForm sectionIndex={index} sectionId={sectionId} />
      )}
      {type === "faq" && <FAQItemsForm sectionIndex={index} />}

      <Button
        variant="outlined"
        color="error"
        onClick={() => onRemove(index)}
        sx={{ mt: 1 }}
      >
        Remove Section
      </Button>
    </Box>
  );
};
