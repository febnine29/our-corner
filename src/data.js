import { v4 as uuidv4 } from "uuid";
function chillHop() {
	return [
		{
			name: "Khi cô đơn em nhớ đến ai",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
			artist: "Grey-D, Suni Hạ Linh, Hoàng Dũng, Orange",
			audio: "https://data.chiasenhac.com/down2/2269/1/2268201-2279e675/128/Khi%20Co%20Don%20Em%20Nho%20Den%20Ai%20-%20Grey%20D_%20Suni.mp3",
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: true,
		},
		{
			name: "Hương mùa hè",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
			artist: "Hoàng Dũng, Suni Hạ Linh",
			audio: "https://data.chiasenhac.com/down2/2265/1/2264073-ff524222/128/Huong%20Mua%20He%20-%20Suni%20Ha%20Linh_%20Hoang%20Dung.mp3",
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Dằm trong tim",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
			artist: "Suni Hạ Linh - TDK",
			audio: "https://data.chiasenhac.com/down2/2269/1/2268208-2bb39c0f/128/Dam%20Trong%20Tim%20-%20Suni%20Ha%20Linh_%20TDK.mp3",
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Nightfall",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
			artist: "Aiguille",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Reflection",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
			artist: "Swørn",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Under the City Stars",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
			artist: "Aso, Middle School, Aviino",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: false,
		},
		//ADD MORE HERE
	];
}

export default chillHop;
