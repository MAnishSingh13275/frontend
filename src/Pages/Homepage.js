import React, { useEffect } from "react";
import {
  Container,
  Box,
  Flex,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Logo from "../Assets/asper-logo-white.png";
import Talk from "../Assets/Talk.png";
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";
import { useHistory } from "react-router-dom";

const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (!user) history.push("/");
  }, [history]);

  return (
    <Flex justify={"center"} align={"center"} direction={{ base: "column-reverse", lg: "row" }} w={"100vw"} m={0}>
      <Container maxW={"xl"} >
        <Box
          display={"flex"}
          justifyContent={"center"}
          p={3}
          bg={"white"}
          w={"100%"}
          m={"40px 0 15px 0"}
          borderRadius={"lg"}
          borderWidth={"1px"}
        >
          <Image maxW={"5rem"} src={Talk} />
        </Box>
        <Box
          p={4}
          bg={"white"}
          w={"100%"}
          borderRadius={"lg"}
          borderWidth={"1px"}
        >
          <Tabs variant="soft-rounded" colorScheme="red">
            <TabList mb={"1em"}>
              <Tab w={"50%"}>LogIn</Tab>
              <Tab w={"50%"}>SignUp</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
      <Container maxW={{lg:"50vw", md:"50vw", sm:"50vw" }}>
        <Image src={Logo} />
      </Container>
    </Flex>
  );
};

export default Homepage;
