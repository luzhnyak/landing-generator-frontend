// FeatureItemsForm.tsx
import { Box, Button, Typography } from "@mui/material";
import { useFormContext, useFieldArray } from "react-hook-form";
import { FeatureItem } from "./FeatureItem";

export const FeatureItemsForm = ({
  sectionIndex,
}: {
  sectionIndex: number;
}) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: `sections.${sectionIndex}.featureItems`,
  });

  return (
    <Box mt={2}>
      <Typography variant="subtitle2" mb={1}>
        Feature Items
      </Typography>

      {fields.map((field, featureIndex) => (
        <FeatureItem
          key={field.id}
          sectionIndex={sectionIndex}
          featureIndex={featureIndex}
          onRemove={() => remove(featureIndex)}
        />
      ))}

      <Button
        onClick={() =>
          append({
            title: "",
            text: "",
            image: `/img/features-${fields.length + 1}.png`,
          })
        }
        variant="outlined"
      >
        + Add Feature Item
      </Button>
    </Box>
  );
};
