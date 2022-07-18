import type { FC } from "react";

import { Wrapper, StyledSelect } from "./styles";
import CustomSelect from "src/components/common/select";
import {
  ProgrammingLanguageSelect,
  FrameworkSelect,
  InfraSelect,
  DBSelect,
} from "src/configs/cateogry-select";

const SelectCategory: FC = () => {
  return (
    <Wrapper>
      <CustomSelect
        label={"프로그래밍 언어"}
        menuItems={ProgrammingLanguageSelect}
        onChange={(_) => null}
        sx={{ mx: 1 }}
      />
      <CustomSelect
        label={"프레임워크"}
        menuItems={FrameworkSelect}
        onChange={(_) => null}
        sx={{ mx: 1 }}
      />
      <CustomSelect
        label={"인프라"}
        menuItems={InfraSelect}
        onChange={(_) => null}
        sx={{ mx: 1 }}
      />
      <CustomSelect
        label={"데이터베이스"}
        menuItems={DBSelect}
        onChange={(_) => null}
        sx={{ mx: 1 }}
      />
    </Wrapper>
  );
};

export default SelectCategory;
