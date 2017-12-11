global.Constants = {
	simulate: {
		CAMERA: false,
		PROFILE_INCOMPLETE: false,
		EXISTING_USER: false,
		VIDEO_COMPLETE: true
	},
	navEvents: {
		SHOW: 'didAppear',
		HIDE: 'didDisappear'
	},
	categories: [
		{
			id: "FOOD",
			name: "Eating Out",
			icon: "cutlery",
			color: "#ff2e33"
		},
		{
			id: "COFFEE",
			name: "Coffee",
			icon: "coffee",
			color: "#ff9126"
		},
		{
			id: "DRINKS",
			name: "Drinks",
			icon: "glass",
			color: "#ffca35"
		},
		{
			id: "BILLS",
			name: "Bills",
			icon: "file-text-o",
			color: "#4acaf8",
		},
		{
			id: "GROCERIES",
			name: "Groceries",
			icon: "shopping-cart",
			color: "#4ada6f",
		},
	],
	defaultUploadFile: "https://www.finearttips.com/wp-content/uploads/2010/05/avatar.jpg",
	courseCoverAspectRatio: "1200x400",
	avatarAspectRatio: "120x120",
	defaultColor: "#36a7de",
	timeoutTempUser: 60000 * 30,

};

module.exports = Constants;
