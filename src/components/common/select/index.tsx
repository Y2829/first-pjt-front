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
  onChange: (value: string) => void;
  sx?: SxProps;
}

const CustomSelect: FC<CustomSelectProps> = ({
  label,
  menuItems,
  onChange,
  sx,
}) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: SelectChangeEvent) => {
    onChange(e.target.value as string);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl
        sx={{
          width: 140,
          ...sx,
        }}
      >
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
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
