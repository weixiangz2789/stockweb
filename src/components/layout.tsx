import type { FC, PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";
import Metadata from "./metadata";
import Header from "./header";

const Layout: FC<PropsWithChildren<{ title?: string }>> = ({ title, children }) => {
	return (
		<>
			<Metadata title={title} />
			<Header />
			<Box pb={10}>{children}</Box>
		</>
	);
};

export default Layout;
