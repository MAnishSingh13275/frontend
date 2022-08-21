import {
  Avatar,
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { BellIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import React from "react";
import ProfileModal from "./ProfileModal";
import { ChatState } from "../../Context/ChatProvider";

const SideDrawer = () => {
  const { user } = ChatState();

  return (
    <Box maxW="100vw" m={0}>
      <Flex
        justify={"space-between"}
        align={"center"}
        bg={"#B00E15"}
        maxW="100vw"
      >
        <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Button
            _hover={{
              background: "#FF151F",
              color: "white",
            }}
            variant="ghost"
          >
            <SearchIcon />
            <Text d={{ base: "none", md: "flex" }} px={4}>
              Search User
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize="2xl" fontFamily="Work sans">
          Talk-A-Tive
        </Text>
        <div>
          <Menu>
            <MenuButton p={1}>
              <BellIcon fontSize="2xl" m={1} />
            </MenuButton>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              bg="transparent"
              _hover={{
                background: "none",
              }}
              _active={{
                background: "none",
              }}
              rightIcon={<ChevronDownIcon />}
            >
              <Avatar
                size="sm"
                cursor="pointer"
                name={user.name}
                src={user.pic}
              />
            </MenuButton>
            <MenuList>
              <ProfileModal user={user}>
                <MenuItem>My Profile</MenuItem>{" "}
              </ProfileModal>
              <MenuDivider />
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Flex>
    </Box>
  );
};

export default SideDrawer;
