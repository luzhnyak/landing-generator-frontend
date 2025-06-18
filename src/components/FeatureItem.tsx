// FeatureItem.tsx
import { Box, Button, TextField } from "@mui/material";
import { useFormContext, useWatch } from "react-hook-form";
import { memo } from "react";

export const FeatureItem = memo(
  ({
    sectionIndex,
    featureIndex,
    onRemove,
  }: {
    sectionIndex: number;
    featureIndex: number;
    onRemove: () => void;
  }) => {
    const { register, control } = useFormContext();
    const item = useWatch({
      control,
      name: `sections.${sectionIndex}.featureItems.${featureIndex}`,
    });

    return (
      <Box
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
          defaultValue={item?.title}
        />
        <TextField
          label="Text"
          {...register(
            `sections.${sectionIndex}.featureItems.${featureIndex}.text`
          )}
          defaultValue={item?.text}
        />
        <TextField
          label="Image URL"
          {...register(
            `sections.${sectionIndex}.featureItems.${featureIndex}.image`
          )}
          defaultValue={item?.image}
        />
        <Button onClick={onRemove} variant="outlined" color="error">
          Remove Feature
        </Button>
      </Box>
    );
  }
);
