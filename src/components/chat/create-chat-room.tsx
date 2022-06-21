import type { FC } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

interface CreateChatRoomProps {
  onClick: (text: string) => void;
}

const CreateChatRoom: FC<CreateChatRoomProps> = ({ onClick }) => {
  const [roomName, setRoomName] = useState<string>("");

  const handleChange = (text: string) => {
    setRoomName(text);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <TextField
        placeholder="채팅방 이름"
        value={roomName}
        onChange={(e) => handleChange(e.target.value)}
      />
      <Button onClick={() => onClick(roomName)} variant="contained">
        채팅방 생성
      </Button>
    </Box>
  );
};

export default CreateChatRoom;
