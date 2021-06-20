module.exports = {
	purge: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			animation: {
				fadeIn: "fadeIn 1s ease-in forwards",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
			},
			height: {
				minContent: "min-content",
				maxContent: "max-content",
			},
			width: {
				cardImgW: "90%",
			},
		},
	},
	variants: {
		animation: ["motion-safe"],
		extend: {},
	},
	plugins: [],
};
