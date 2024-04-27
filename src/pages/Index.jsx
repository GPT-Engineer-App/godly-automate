import { Box, Button, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaRobot, FaTools, FaHistory, FaPlay } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex justifyContent="space-between" alignItems="center" p={5}>
        <Heading as="h1" size="xl">
          Automation Dashboard
        </Heading>
        <Button leftIcon={<FaRobot />} colorScheme="teal">
          Connect AI
        </Button>
      </Flex>
      <VStack spacing={4} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md">Build Status</Heading>
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize="sm">Current build status: Running</Text>
            <Button leftIcon={<FaPlay />} colorScheme="green">
              Trigger Build
            </Button>
          </Flex>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md">Recent Activities</Heading>
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize="sm">Latest activities logged here.</Text>
            <Button leftIcon={<FaHistory />} colorScheme="blue">
              View Logs
            </Button>
          </Flex>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md">Tools & Configurations</Heading>
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize="sm">Manage your tools and settings.</Text>
            <Button leftIcon={<FaTools />} colorScheme="purple">
              Manage Tools
            </Button>
          </Flex>
        </Box>
      </VStack>
      <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBpbnRlcmZhY2V8ZW58MHx8fHwxNzE0MjEwNTM1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Technology Interface" />
    </Container>
  );
};

export default Index;
