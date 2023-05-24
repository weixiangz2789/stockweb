import type { FC } from "react";
import Head from "next/head";

const Metadata: FC<{ title?: string }> = ({ title }) => {
	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
			<title>{`${title ? title + " | " : ""}Investico`}</title>
			<meta name="description" content="Investico: Your gateway to smarter investing." />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="/" />
			<meta property="og:title" content="Investico" />
			<meta property="og:description" content="Investico: Your gateway to smarter investing." />
			<meta property="og:image" content="/logo-color.png" />
			<meta name="twitter:card" content="summary_large_image" />
		</Head>
	);
};

export default Metadata;
