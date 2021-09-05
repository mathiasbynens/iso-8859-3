/*! https://mths.be/iso-8859-3 v3.0.1 by @mathias | MIT license */

const stringFromCharCode = String.fromCharCode;

const INDEX_BY_CODE_POINT = new Map([
	[128, 0],
	[129, 1],
	[130, 2],
	[131, 3],
	[132, 4],
	[133, 5],
	[134, 6],
	[135, 7],
	[136, 8],
	[137, 9],
	[138, 10],
	[139, 11],
	[140, 12],
	[141, 13],
	[142, 14],
	[143, 15],
	[144, 16],
	[145, 17],
	[146, 18],
	[147, 19],
	[148, 20],
	[149, 21],
	[150, 22],
	[151, 23],
	[152, 24],
	[153, 25],
	[154, 26],
	[155, 27],
	[156, 28],
	[157, 29],
	[158, 30],
	[159, 31],
	[160, 32],
	[163, 35],
	[164, 36],
	[167, 39],
	[168, 40],
	[173, 45],
	[176, 48],
	[178, 50],
	[179, 51],
	[180, 52],
	[181, 53],
	[183, 55],
	[184, 56],
	[189, 61],
	[192, 64],
	[193, 65],
	[194, 66],
	[196, 68],
	[199, 71],
	[200, 72],
	[201, 73],
	[202, 74],
	[203, 75],
	[204, 76],
	[205, 77],
	[206, 78],
	[207, 79],
	[209, 81],
	[210, 82],
	[211, 83],
	[212, 84],
	[214, 86],
	[215, 87],
	[217, 89],
	[218, 90],
	[219, 91],
	[220, 92],
	[223, 95],
	[224, 96],
	[225, 97],
	[226, 98],
	[228, 100],
	[231, 103],
	[232, 104],
	[233, 105],
	[234, 106],
	[235, 107],
	[236, 108],
	[237, 109],
	[238, 110],
	[239, 111],
	[241, 113],
	[242, 114],
	[243, 115],
	[244, 116],
	[246, 118],
	[247, 119],
	[249, 121],
	[250, 122],
	[251, 123],
	[252, 124],
	[264, 70],
	[265, 102],
	[266, 69],
	[267, 101],
	[284, 88],
	[285, 120],
	[286, 43],
	[287, 59],
	[288, 85],
	[289, 117],
	[292, 38],
	[293, 54],
	[294, 33],
	[295, 49],
	[304, 41],
	[305, 57],
	[308, 44],
	[309, 60],
	[348, 94],
	[349, 126],
	[350, 42],
	[351, 58],
	[364, 93],
	[365, 125],
	[379, 47],
	[380, 63],
	[728, 34],
	[729, 127]
]);
const INDEX_BY_POINTER = new Map([
	[0, '\x80'],
	[1, '\x81'],
	[2, '\x82'],
	[3, '\x83'],
	[4, '\x84'],
	[5, '\x85'],
	[6, '\x86'],
	[7, '\x87'],
	[8, '\x88'],
	[9, '\x89'],
	[10, '\x8A'],
	[11, '\x8B'],
	[12, '\x8C'],
	[13, '\x8D'],
	[14, '\x8E'],
	[15, '\x8F'],
	[16, '\x90'],
	[17, '\x91'],
	[18, '\x92'],
	[19, '\x93'],
	[20, '\x94'],
	[21, '\x95'],
	[22, '\x96'],
	[23, '\x97'],
	[24, '\x98'],
	[25, '\x99'],
	[26, '\x9A'],
	[27, '\x9B'],
	[28, '\x9C'],
	[29, '\x9D'],
	[30, '\x9E'],
	[31, '\x9F'],
	[32, '\xA0'],
	[33, '\u0126'],
	[34, '\u02D8'],
	[35, '\xA3'],
	[36, '\xA4'],
	[38, '\u0124'],
	[39, '\xA7'],
	[40, '\xA8'],
	[41, '\u0130'],
	[42, '\u015E'],
	[43, '\u011E'],
	[44, '\u0134'],
	[45, '\xAD'],
	[47, '\u017B'],
	[48, '\xB0'],
	[49, '\u0127'],
	[50, '\xB2'],
	[51, '\xB3'],
	[52, '\xB4'],
	[53, '\xB5'],
	[54, '\u0125'],
	[55, '\xB7'],
	[56, '\xB8'],
	[57, '\u0131'],
	[58, '\u015F'],
	[59, '\u011F'],
	[60, '\u0135'],
	[61, '\xBD'],
	[63, '\u017C'],
	[64, '\xC0'],
	[65, '\xC1'],
	[66, '\xC2'],
	[68, '\xC4'],
	[69, '\u010A'],
	[70, '\u0108'],
	[71, '\xC7'],
	[72, '\xC8'],
	[73, '\xC9'],
	[74, '\xCA'],
	[75, '\xCB'],
	[76, '\xCC'],
	[77, '\xCD'],
	[78, '\xCE'],
	[79, '\xCF'],
	[81, '\xD1'],
	[82, '\xD2'],
	[83, '\xD3'],
	[84, '\xD4'],
	[85, '\u0120'],
	[86, '\xD6'],
	[87, '\xD7'],
	[88, '\u011C'],
	[89, '\xD9'],
	[90, '\xDA'],
	[91, '\xDB'],
	[92, '\xDC'],
	[93, '\u016C'],
	[94, '\u015C'],
	[95, '\xDF'],
	[96, '\xE0'],
	[97, '\xE1'],
	[98, '\xE2'],
	[100, '\xE4'],
	[101, '\u010B'],
	[102, '\u0109'],
	[103, '\xE7'],
	[104, '\xE8'],
	[105, '\xE9'],
	[106, '\xEA'],
	[107, '\xEB'],
	[108, '\xEC'],
	[109, '\xED'],
	[110, '\xEE'],
	[111, '\xEF'],
	[113, '\xF1'],
	[114, '\xF2'],
	[115, '\xF3'],
	[116, '\xF4'],
	[117, '\u0121'],
	[118, '\xF6'],
	[119, '\xF7'],
	[120, '\u011D'],
	[121, '\xF9'],
	[122, '\xFA'],
	[123, '\xFB'],
	[124, '\xFC'],
	[125, '\u016D'],
	[126, '\u015D'],
	[127, '\u02D9']
]);

// https://encoding.spec.whatwg.org/#error-mode
const decodingError = (mode) => {
	if (mode === 'replacement') {
		return '\uFFFD';
	}
	// Else, `mode == 'fatal'`.
	throw new Error();
};

const encodingError = (mode) => {
	if (mode === 'replacement') {
		return 0xFFFD;
	}
	// Else, `mode == 'fatal'`.
	throw new Error();
};

// https://encoding.spec.whatwg.org/#single-byte-decoder
export const decode = (input, options) => {
	let mode;
	if (options && options.mode) {
		mode = options.mode.toLowerCase();
	}
	// “An error mode […] is either `replacement` (default) or `fatal` for a
	// decoder.”
	if (mode !== 'replacement' && mode !== 'fatal') {
		mode = 'replacement';
	}

	const length = input.length;

	// Support byte strings as input.
	if (typeof input === 'string') {
		const bytes = new Uint16Array(length);
		for (let index = 0; index < length; index++) {
			bytes[index] = input.charCodeAt(index);
		}
		input = bytes;
	}

	const buffer = [];
	for (let index = 0; index < length; index++) {
		const byteValue = input[index];
		// “If `byte` is an ASCII byte, return a code point whose value is
		// `byte`.”
		if (0x00 <= byteValue && byteValue <= 0x7F) {
			buffer.push(stringFromCharCode(byteValue));
			continue;
		}
		// “Let `code point` be the index code point for `byte − 0x80` in index
		// single-byte.”
		const pointer = byteValue - 0x80;
		if (INDEX_BY_POINTER.has(pointer)) {
			// “Return a code point whose value is `code point`.”
			buffer.push(INDEX_BY_POINTER.get(pointer));
		} else {
			// “If `code point` is `null`, return `error`.”
			buffer.push(decodingError(mode));
		}
	}
	const result = buffer.join('');
	return result;
};

// https://encoding.spec.whatwg.org/#single-byte-encoder
export const encode = (input, options) => {
	let mode;
	if (options && options.mode) {
		mode = options.mode.toLowerCase();
	}
	// Support `fatal` (default) and `replacement` error modes.
	if (mode !== 'fatal' && mode !== 'replacement') {
		mode = 'fatal';
	}
	const length = input.length;
	const result = new Uint16Array(length);
	for (let index = 0; index < length; index++) {
		const codePoint = input.charCodeAt(index);
		// “If `code point` is an ASCII code point, return a byte whose
		// value is `code point`.”
		if (0x00 <= codePoint && codePoint <= 0x7F) {
			result[index] = codePoint;
			continue;
		}
		// “Let `pointer` be the index pointer for `code point` in index
		// single-byte.”
		if (INDEX_BY_CODE_POINT.has(codePoint)) {
			const pointer = INDEX_BY_CODE_POINT.get(codePoint);
			// “Return a byte whose value is `pointer + 0x80`.”
			result[index] = pointer + 0x80;
		} else {
			// “If `pointer` is `null`, return `error` with `code point`.”
			result[index] = encodingError(mode);
		}
	}
	return result;
};

export const labels = [
	'csisolatin3',
	'iso-8859-3',
	'iso-ir-109',
	'iso8859-3',
	'iso88593',
	'iso_8859-3',
	'iso_8859-3:1988',
	'l3',
	'latin3'
];
