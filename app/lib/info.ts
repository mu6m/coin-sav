const info = {
	title: "Coinsav",
	description:
		"CoinSav is a programmable application inteface that lets developers get the latest market info.",
	image: "/logo/wideText.png",
	url: "coin.com",
	handles: {
		twitter: "coin",
	},
};

const seo = (info: any) => {
	return [
		{
			title: info.title,
		},
		{
			property: "description",
			content: info.description,
		},
		{
			property: "image",
			content: info.image,
		},
		{
			property: "og:title",
			content: info.title,
		},
		{
			property: "og:description",
			content: info.description,
		},
		{
			property: "og:image",
			content: info.image,
		},
		{
			property: "og:url",
			content: info.url,
		},
		{
			property: "og:type",
			content: "website",
		},
		{
			name: "twitter:card",
			content: "summary_large_image",
		},
		{
			name: "twitter:site",
			content: "@" + info.handles.twitter,
		},
		{
			name: "twitter:title",
			content: info.title,
		},
		{
			name: "twitter:description",
			content: info.description,
		},
		{
			name: "twitter:image",
			content: info.image,
		},
	];
};
export { info, seo };
