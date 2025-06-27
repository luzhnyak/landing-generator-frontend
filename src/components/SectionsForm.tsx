import { Box, Button, Typography } from "@mui/material";
import { useFormContext, useFieldArray } from "react-hook-form";
import { defaultSectionValues, sectionTypes } from "../configs/formFields";
import type { SectionType } from "../configs/formFields";
import type { FormData } from "../configs/formFields";
import { SectionItem } from "./SectionItem";
import { memo } from "react";

const MemoizedSectionItem = memo(SectionItem);

export const SectionsForm = () => {
  const { control } = useFormContext<FormData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "sections",
  });

  const onAddSection = <T extends SectionType["type"]>(type: T) => {
    append({ ...defaultSectionValues[type] });
  };

  return (
    <Box mb={4}>
      <Typography variant="h6">Sections</Typography>

      {fields.map((field, index) => (
        <MemoizedSectionItem key={field.id} index={index} onRemove={remove} />
      ))}

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
    </Box>
  );
};
