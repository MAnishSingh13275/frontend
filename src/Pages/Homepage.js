import React, { useEffect } from "react";
import {
  Container,
  Box,
  Text,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Logo from "../Assets/asper-logo-white.png";
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";
import { useHistory } from "react-router-dom";
import Talk from "../Assets/Talk.png";

const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (!user) history.push("/");
  }, [history]);

  return (
    <Box display={{ lg: "flex" }} w={"100vw"} m={0}>
      <Container maxW={"xl"} m={"auto"}>
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
          <Text fontSize={"4xl"} color={"black"}>
            <Image h={"3rem"} src={Talk} />
          </Text>
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
      <Container maxW={"30vw"} m={"auto"}>
        <Image display={{ md: "none", sm: "none", lg: "block" }} src={Logo} />
      </Container>
    </Box>
  );
};

export default Homepage;
