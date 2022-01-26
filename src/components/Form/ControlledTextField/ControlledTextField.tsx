import { DevTool } from '@hookform/devtools';
import { Box, TextField } from '@material-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import useCOntrolledTextFieldStyles from './styles';

interface IControlledTextField {
  name: string;
  defaultValue: string;
  label: string;
  type: React.HTMLInputTypeAttribute;
  className?: string;
}

const ControlledTextField: React.FC<IControlledTextField> = ({
  defaultValue,
  label,
  name,
  type,
  className,
}: IControlledTextField): JSX.Element => {
  const styles = useCOntrolledTextFieldStyles();
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Box className={styles.field}>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue} // Need this to prevent the controlled input error
        render={({ field }) => (
          <TextField
            label={label}
            variant="outlined"
            type={type}
            error={!!errors[name]}
            className={className}
            helperText={errors[name] ? errors[name]?.message : ''}
            {...field}
          />
        )}
      />
      <DevTool control={control} />
    </Box>
  );
};

export default ControlledTextField;
