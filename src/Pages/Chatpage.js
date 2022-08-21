import { Box, Container, Flex } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../Components/Chatbox";
import SideDrawer from "../Components/miscellaneous/SideDrawer";
import MyChats from "../Components/MyChats";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <Container maxW="100vw" p={0}>
      {user && <SideDrawer />}
      <Flex w="100%" h="91.5vh" p="10px">
        {user && <MyChats />}
        {user && <Chatbox />}
      </Flex>
    </Container>
  );
};

export default Chatpage;
