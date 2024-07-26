import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

export const Location = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const [location, setLocation] = useState("");

  const handleLocationSubmit = () => {
    onClose();
  };

  return (
    <div>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
        bg="none"
        _hover={{ bg: "none" }}
      >
        {location || "Loc"} <LocationOnIcon marginLeft="20px" />
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent bgColor="#15171C" color="white">
          <ModalHeader>Set Your Location</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter Your Current Location"
            />
          </ModalBody>
          <ModalFooter>
            <Button
              _hover={{ bg: "brown" }}
              bgColor="#15171C"
              color="white"
              onClick={handleLocationSubmit}
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
