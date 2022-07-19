import type { FC } from "react";
import type { SelectChangeEvent } from "@mui/material";
import { useState } from "react";

import {
  Wrapper,
  StyledTextField,
  StyledSelect,
  StyledInputLabel,
  StyledMenuItem,
  StyledFormControl,
  SearchButton,
} from "./styles";
import CustomSelect from "src/components/common/select";

const SearchGroup: FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const menuItems = [
    { value: "title", name: "제목" },
    { value: "writer", name: "작성자" },
  ];

  const handleChangeSelect = (e: SelectChangeEvent) => {
    console.log(e);
    setSelectedValue(e.target.value as string);
  };
  return (
    <Wrapper>
      <CustomSelect
        menuItems={menuItems}
        label={"검색"}
        onChange={handleChangeSelect}
        sx={{
          width: "100px",
        }}
      />
      <StyledTextField fullWidth />
      <SearchButton variant="contained">검색</SearchButton>
    </Wrapper>
  );
};

export default SearchGroup;
