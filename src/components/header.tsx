import { FC, PropsWithChildren, useState } from "react";
import {
  Stack,
  IconButton,
  Image,
  useDisclosure,
  Flex,
  Button,
  Input,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  CloseIcon,
  HamburgerIcon,
  SearchIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";

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
  const [stock, setStock] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      window.location.href = `/stock/${stock}`;
    }
  };
  return (
    <Box bg={colorMode === "light" ? "gray.100" : "gray.800"} px={4}>
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
            src="\4d36ad11f14a453db575dceb0abc9265.png"
            alt="Logo"
            w={{ base: 20, md: 20 }}
          />
        </Link>
        <Flex alignItems="center">
          <Input
            placeholder="Enter a Ticker Symbol"
            h={50}
            w={1000}
            m={5}
            onChange={(e) => {
              setStock(e.target.value);
            }}
            onKeyPress={handleKeyPress}
          />
          <IconButton
            onClick={() => (window.location.href = `/stock/${stock}`)}
            aria-label="Enter a Ticker Symbol"
            icon={<SearchIcon />}
            h={50}
            href={`/stock/${stock}`}
            as={Link}
          />
        </Flex>
        <Flex alignItems="center">
          <PageLink label="Watchlist" path="/watchlist" />
          <IconButton
            aria-label="Toggle Dark Mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            h={50}
          />
        </Flex>
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
