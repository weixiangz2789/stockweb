import type { FC, PropsWithChildren } from "react";
import {
  Stack,
  Box,
  IconButton,
  Image,
  useDisclosure,
  Flex,
  Button,
  Input,
  ButtonGroup,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { CloseIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";

const links = [{ label: "Watchlist", path: "/watchlist" }];

const PageLink: FC<PropsWithChildren<{ label: string; path: string }>> = ({
  label,
  path,
}) => {
  const router = useRouter();

  return (
    <Box
      as={Link}
      px={3}
      py={{ base: 2, md: 1 }}
      rounded="xl"
      fontWeight={router.pathname === path ? "semibold" : "normal"}
      href={path}
      _hover={{
        fontWeight: router.pathname !== path && "bold",
      }}
    >
      {label}
    </Box>
  );
};

const Header: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="gray.100" px={4}>
      <Flex
        h={{ base: 28, md: 24 }}
        px={5}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <IconButton
          as={Button}
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Link href="/">
          <Image
            src="\Meme_Man_on_transparent_background-removebg-preview.png"
            alt="Logo"
            w={{ base: 20, md: 20 }}
          />
        </Link>
        <Box>
          <Input placeholder="Search" h={50} w={1000} m={5} />
          <IconButton aria-label="Search" icon={<SearchIcon />} h={50} />
        </Box>

        <Flex as="nav" display={{ base: "none", md: "flex" }}>
          {links.map((link, _) => (
            <PageLink key={_} {...link} />
          ))}
        </Flex>
        <Flex px={4} />
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {links.map((link, _) => (
              <PageLink key={_} {...link} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
