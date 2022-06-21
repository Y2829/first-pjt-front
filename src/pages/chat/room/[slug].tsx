import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextField, Button } from "@mui/material";

import { BASE_URL } from "src/configs/indext";

interface ChatRoomProps {
  roomId: string;
}

type Chat = {
  type: string;
  createdAt: Date;
  message: string;
};

const MessageBox = styled(Box)(() => ({
  backgroundColor: "#ffffcc",
  width: "500px",
  height: "auto",
  borderRadius: "8px",
  color: "#000",
}));

const ChatRoom: NextPage<ChatRoomProps> = ({ roomId }) => {
  const router = useRouter();
  const sock = new SockJS(`${BASE_URL}/api/ws-stomp`);
  const ws = Stomp.over(sock);
  const [roomTitle, setRoomTitle] = useState<string>("");
  const [chatLogs, setChatLogs] = useState<Array<Chat>>([]);
  const [message, setMessage] = useState<string>("");

  const handleChange = (text: string) => {
    setMessage(text);
  };

  const handleClickSend = () => {
    const msg = {
      type: "TALK",
      roomId,
      message,
      sender: "admin",
    };
    ws.send(`/pub/chat/message`, {}, JSON.stringify(msg));
    setMessage("");
  };

  useEffect(() => {
    const chat_logs = chatLogs;
    const slug = router.query.slug;
    setRoomTitle(slug as string);

    ws.connect({}, () => {
      if (slug) {
        ws.send(
          `/pub/chat/message`,
          {},
          JSON.stringify({
            type: "ENTER",
            roomId,
            message: `${slug}방에 입장했습니다.`,
            sender: "admin",
          })
        );
      }
      ws.subscribe(`/sub/chat/room/${roomId}`, (data) => {
        const newMsg = JSON.parse(data.body);
        if (newMsg.type === "TALK") {
          const newChat = {
            type: "TALK",
            createdAt: new Date(),
            message: newMsg.message,
          };
          chat_logs.push(newChat);
          setChatLogs([...chat_logs]);
        }
      });
    });

    return () => {
      ws.disconnect(() => {
        ws.unsubscribe("sub-0");
      });
    };
  }, []);

  return (
    <Box
      sx={{
        padding: 5,
        border: "1px solid #000",
      }}
    >
      <Box>
        {chatLogs &&
          chatLogs.reverse().map((chat, i) => {
            if (chat.type === "TALK") {
              return <MessageBox>{chat.message}</MessageBox>;
            } else {
              return <></>;
            }
          })}
        <Typography>{roomTitle} 방에 입장하였습니다.</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <TextField
          value={message}
          onChange={(e) => handleChange(e.target.value)}
        />
        <Button onClick={handleClickSend}>보내기</Button>
      </Box>
    </Box>
  );
};

export default ChatRoom;
