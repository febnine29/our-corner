import { v4 as uuidv4 } from "uuid";
import mylove from './database/mylove.mp3';
import damtrongtim from './database/DamTrongTim.mp3';
import huongmuahe from './database/HuongMuahe.mp3';
import colequakho from './database/CoLeQuaKhoDeQuenMotNguoi.mp3';
import TamTinh from './database/TamTinh.mp3';
import TuSu from './database/TuSu.mp3';
import ngatukhongden from './database/NgaTukhongDen.mp3';
import untilfoundyou from './database/UntilFoundYou.mp3';
import detoiomem from './database/detoiomem.mp3';
import anhsedencungconmua from './database/anhsedencungconmua.mp3'
import dubaothoitiet from './database/dubaothoitiet.mp3'
import emvetinhkhoi from './database/emvetinhkhoi.mp3';
import baotienbinhyen from './database/baotienbinhyen.mp3';
import relax from './database/relax.mp3';
import saigonhomnaymua from './database/saigonhomnaymua.mp3'
function chillHop() {
	return [
		{
			name: "Anh sẽ đến cùng cơn mưa (just for you)",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
			artist: "HỨA KIM TUYỀN x GREY D",
			audio: anhsedencungconmua,
			color: ["#480085", "#480085"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "'bao tiền một mớ bình yên?'",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
			artist: "14 Casper & Bon Nghiêm",
			audio: baotienbinhyen,
			color: ["#480085", "#480085"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Để tôi ôm em bằng giai điệu này",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
			artist: "KAI ĐINH x MIN x GREY D",
			audio: detoiomem,
			color: ["#480085", "#480085"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Dự báo thời tiết hôm nay mưa",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
			artist: "GREY D",
			audio: dubaothoitiet,
			color: ["#480085", "#480085"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Sài gòn hôm nay mưa",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
			artist: "JSON x HOÀNG DUYÊN",
			audio: saigonhomnaymua,
			color: ["#480085", "#480085"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Em về tinh khôi",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
			artist: "AMEE x HOÀNG DŨNG x GREY D",
			audio: emvetinhkhoi,
			color: ["#480085", "#480085"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Hương Mùa Hè",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
			artist: "Suni Hạ Linh, Hoàng Dũng",
			audio: huongmuahe,
			color: ["#480085", "#480085"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Dằm Trong Tim",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
			artist: "Suni Hạ Linh ft TDK",
			audio: damtrongtim,
			color: ["#480085", "#480085"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Tâm Tình MERLEY",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
			artist: "Suni Hạ Linh, Orange, TLinh",
			audio: TamTinh,
			color: ["#480085", "#480085"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Ngã Tư Không Đèn",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
			artist: "TRANG",
			audio: ngatukhongden,
			color: ["#480085", "#480085"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Tự Sự",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
			artist: "Orange ft Thuận Nguyễn",
			audio: TuSu,
			color: ["#480085", "#480085"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Until I Found You",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
			artist: "Stephen Sanchez, Em Beihold",
			audio: untilfoundyou,
			color: ["#480085", "#480085"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Có Lẽ Quá Khó Để Quên Một Người",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
			artist: "D.Blue, 1nG",
			audio: colequakho,
			color: ["#480085", "#480085"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Nhạc không lời hơi buồn xíuuu",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
			artist: "Anh không biết tên tác giả :(",
			audio: relax,
			color: ["#480085", "#480085"],
			id: uuidv4(),
			active: false,
		},
		//ADD MORE HERE
	];
}

export default chillHop;
