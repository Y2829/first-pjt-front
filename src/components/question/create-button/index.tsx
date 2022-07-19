import type { FC } from "react";

import { colors } from "src/theme/colors";
import CommonButton from "src/components/common/button";

interface CreateButtonProps {
  onClick: () => void;
}

const CreateButton: FC<CreateButtonProps> = ({ onClick }) => {
  return (
    <CommonButton
      text={"질문등록"}
      onClick={onClick}
      sx={{
        width: "90px",
        backgroundColor: "#fff",
        border: `1px solid ${colors.primary}`,
        color: colors.primary,
        boxShadow: "none",
        "&:hover": {
          backgroundColor: colors.primary,
          color: "#fff",
        },
      }}
    />
  );
};

export default CreateButton;
