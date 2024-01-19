import React, { useRef } from "react";
import Layout from "../components/Layout";
import {
  Button,
  Checkbox,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  DrawerFooter,
  DrawerHeader,
  DrawerBody,
  Spinner,
  useDisclosure,
  Input,
  SkeletonCircle,
  Skeleton,
  useColorMode,
} from "@chakra-ui/react";

export default function Chakra() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Layout>
      <div className="w-full flex  justify-center py-16">
        <div className="w-[1200px] flex flex-col space-y-4">
          <Button colorScheme="teal" size="md" variant="outline">
            버튼
          </Button>
          <Checkbox colorScheme="green">checkbox</Checkbox>
          <Spinner />
          {/* 메뉴 */}
          <div>
            <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
              Open
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>
                  <Input placeholder="Type here..." />
                </DrawerBody>

                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="blue">Save</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
          {/* 스켈레톤 */}
          {/* <Box padding="6" boxShadow="lg" bg="white"> */}
          <SkeletonCircle size="10" />
          {/* <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" /> */}
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          {/* </Box> */}

          {/* 다크모드 */}
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </div>
      </div>
    </Layout>
  );
}
