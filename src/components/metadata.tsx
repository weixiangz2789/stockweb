import type { FC } from "react";
import Head from "next/head";

const Metadata: FC<{ title?: string }> = ({ title }) => {
	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
			<title>{`${title ? title + " | " : ""}nutrifit`}</title>
			<meta name="description" content="Nutrifit: Good food, good life." />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="/" />
			<meta property="og:title" content="nutrifit" />
			<meta property="og:description" content="Nutrifit: Good food, good life." />
			<meta property="og:image" content="/logo-color.png" />
			<meta name="twitter:card" content="summary_large_image" />
		</Head>
	);
};

export default Metadata;
