import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormContext, useFieldArray } from "react-hook-form";
import { defaultSectionValues, sectionTypes } from "../configs/formFields";
import type { SectionType } from "../configs/formFields";
import type { FormData } from "../configs/formFields";
import { FeatureItemsForm } from "./FeatureItemsForm";

export const SectionsForm = () => {
  const { control, register, watch } = useFormContext<FormData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "sections",
  });

  const sections = watch("sections");

  const onAddSection = <T extends SectionType["type"]>(type: T) => {
    append({ ...defaultSectionValues[type] });
  };

  return (
    <Box mb={4}>
      <Typography variant="h6">Sections</Typography>

      <Box display="flex" gap={2} my={2}>
        {sectionTypes.map((type) => (
          <Button
            key={type}
            onClick={() => onAddSection(type)}
            variant="outlined"
          >
            Add {type}
          </Button>
        ))}
      </Box>

      {fields.map((field, index) => {
        const type = sections?.[index]?.type || field.type;
        return (
          <Box
            key={field.id}
            border="1px solid #ccc"
            borderRadius={2}
            p={2}
            mb={2}
          >
            <Typography variant="subtitle1">
              {type.toUpperCase()} секція
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

            {type === "about" && (
              <TextField
                fullWidth
                label="Content"
                {...register(`sections.${index}.content`)}
                margin="normal"
              />
            )}

            {type === "features" && <FeatureItemsForm sectionIndex={index} />}

            <Button
              variant="outlined"
              color="error"
              onClick={() => remove(index)}
              sx={{ mt: 1 }}
            >
              Remove Section
            </Button>
          </Box>
        );
      })}
    </Box>
  );
};
