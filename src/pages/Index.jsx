import { useState } from "react";
import { Container, VStack, Text, Input, Button, IconButton, Box, Heading, useToast } from "@chakra-ui/react";
import { FaUpload, FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";

const Index = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [textInput, setTextInput] = useState("");
  const [generatedVideoUrl, setGeneratedVideoUrl] = useState("");
  const toast = useToast();

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoFile(URL.createObjectURL(file));
      toast({
        title: "Video uploaded.",
        description: "Your video has been uploaded successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleGenerateVideo = () => {
    // Placeholder for video generation logic
    setGeneratedVideoUrl("https://images.unsplash.com/photo-1455849318743-b2233052fcff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzaWduJTIwbGFuZ3VhZ2UlMjB2aWRlb3xlbnwwfHx8fDE3MTc4NDMzMjZ8MA&ixlib=rb-4.0.3&q=80&w=1080");
    toast({
      title: "Video generated.",
      description: "Your sign language video has been generated.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6} width="100%">
        <Heading as="h1" size="xl">
          Sign Language Recognition and Generation
        </Heading>

        <Box width="100%">
          <Text fontSize="lg" mb={2}>
            Upload a video for recognition:
          </Text>
          <Input type="file" accept="video/*" onChange={handleVideoUpload} display="none" id="video-upload" />
          <label htmlFor="video-upload">
            <IconButton aria-label="Upload video" icon={<FaUpload />} size="lg" as="span" />
          </label>
          {videoFile && <ReactPlayer url={videoFile} controls width="100%" />}
        </Box>

        <Box width="100%">
          <Text fontSize="lg" mb={2}>
            Generate sign language video from text:
          </Text>
          <Input placeholder="Enter text" value={textInput} onChange={handleTextInputChange} mb={2} />
          <Button leftIcon={<FaPlay />} colorScheme="teal" onClick={handleGenerateVideo}>
            Generate Video
          </Button>
          {generatedVideoUrl && <ReactPlayer url={generatedVideoUrl} controls width="100%" />}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
