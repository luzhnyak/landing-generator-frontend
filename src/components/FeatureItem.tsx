// FeatureItem.tsx
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { useFormContext, useWatch } from "react-hook-form";
import { memo } from "react";

export const FeatureItem = memo(
  ({
    sectionIndex,
    featureIndex,
    sectionId,
    onRemove,
  }: {
    sectionIndex: number;
    featureIndex: number;
    sectionId: string;
    onRemove: () => void;
  }) => {
    const { register, control, setValue } = useFormContext();
    const item = useWatch({
      control,
      name: `sections.${sectionIndex}.featureItems.${featureIndex}`,
    });

    const handleSetImageValue = () => {
      setValue(
        `sections.${sectionIndex}.featureItems.${featureIndex}.image`,
        `/img/${sectionId}-${featureIndex + 1}.png`
      );
    };

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

        <Button onClick={onRemove} variant="outlined" color="error">
          Remove Feature
        </Button>
      </Box>
    );
  }
);
