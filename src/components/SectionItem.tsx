import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
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
  const { control, register, setValue } = useFormContext();
  const type = useWatch({ control, name: `sections.${index}.type` });
  const sectionId = useWatch({ control, name: `sections.${index}.id` });

  const handleSetImageValue = () => {
    setValue(`sections.${index}.image`, `/img/${sectionId}.png`);
  };

  return (
    <Box border="1px solid #ccc" borderRadius={2} p={2} mb={2}>
      <Typography variant="subtitle1">
        {type?.toUpperCase()} sections
      </Typography>

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
      <FormControlLabel
        control={<Checkbox {...register(`sections.${index}.background`)} />}
        label="Add background image"
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
            label="List"
            {...register(`sections.${index}.ul`)}
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
          <TextField
            label="Image URL"
            {...register(`sections.${index}.image`)}
            margin="normal"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleSetImageValue} edge="end">
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
      {type === "swiper" && (
        <>
          <TextField
            fullWidth
            label="Text"
            {...register(`sections.${index}.text`)}
            margin="normal"
            multiline
            minRows={4}
          />

          <Typography variant="subtitle1">Swiper settings</Typography>

          <FormControlLabel
            control={<Checkbox {...register(`sections.${index}.pagination`)} />}
            label="Show pagination"
          />
          <FormControlLabel
            control={<Checkbox {...register(`sections.${index}.navigation`)} />}
            label="Show navigation"
          />
          <FormControlLabel
            control={
              <Checkbox {...register(`sections.${index}.effectCoverflow`)} />
            }
            label="Add EffectCoverflow"
          />
          <FormControlLabel
            control={
              <Checkbox {...register(`sections.${index}.hideOnDesktop`)} />
            }
            label="Hide for desktop"
          />

          <GalleryItemsForm sectionIndex={index} sectionId={sectionId} />
        </>
      )}
      {type === "faq" && (
        <>
          <TextField
            fullWidth
            label="Text"
            {...register(`sections.${index}.text`)}
            margin="normal"
            multiline
            minRows={4}
          />
          <FAQItemsForm sectionIndex={index} />
        </>
      )}

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
