import type { NextPage } from "next";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";

import CreateChatRoom from "src/components/chat/create-chat-room";
import { createChatRoom } from "src/apis/chat";

const ChatList: NextPage = () => {
  const router = useRouter();
  const handleClick = (roomName: string) => {
    if (roomName.length === 0) return null;
    const response = createChatRoom(roomName);
    response.then(() => {
      router.push(`/chat/room/${roomName}`);
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #000",
        padding: 5,
      }}
    >
      <CreateChatRoom onClick={handleClick} />
    </Box>
  );
};

export default ChatList;
