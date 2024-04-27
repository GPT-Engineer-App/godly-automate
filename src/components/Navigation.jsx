import { Box, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaHome, FaRobot } from "react-icons/fa";

const Navigation = () => {
  return (
    <Flex as="nav" p={3} bg="gray.800" color="white" justifyContent="space-between" alignItems="center">
      <Box p="2">
        <Link to="/">
          <Button leftIcon={<FaHome />} variant="ghost">
            Home
          </Button>
        </Link>
        <Link to="/automation">
          <Button leftIcon={<FaRobot />} variant="ghost">
            Automation
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
