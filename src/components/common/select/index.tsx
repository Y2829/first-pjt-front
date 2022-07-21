import type { FC } from "react";
import type { SxProps, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

interface CustomSelectProps {
  label: string;
  menuItems: Array<{ value: string; name: string }>;
  defaultValue?: string;
  onChange: (e: SelectChangeEvent) => void;
  sx?: SxProps;
}

const CustomSelect: FC<CustomSelectProps> = ({
  label,
  menuItems,
  defaultValue,
  onChange,
  sx,
}) => {
  // const [value, setValue] = useState<string>("");

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl
        sx={{
          width: 150,
          ...sx,
        }}
      >
        <InputLabel id={label}>{label}</InputLabel>
        <Select
          labelId={label}
          id={label}
          label={label}
          onChange={onChange}
          defaultValue={defaultValue ?? ""}
        >
          {menuItems.map((menu) => (
            <MenuItem key={menu.value} value={menu.value}>
              {menu.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CustomSelect;
