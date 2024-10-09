Options.Triggers.push({
	zoneId: ZoneId.MatchAll,
	triggers: [
			"../../user/raidboss/天音身位警察/音频1.mp3",
			"../../user/raidboss/天音身位警察/音频2.mp3",
			"../../user/raidboss/天音身位警察/音频3.mp3",
			"../../user/raidboss/天音身位警察/音频4.mp3",
			"../../user/raidboss/天音身位警察/音频5.mp3",
			"../../user/raidboss/天音身位警察/音频6.mp3",
			"../../user/raidboss/天音身位警察/音频7.mp3",
			"../../user/raidboss/天音身位警察/音频8.mp3",
			"../../user/raidboss/天音身位警察/音频9.mp3",
			"../../user/raidboss/天音身位警察/音频10.mp3",
			"../../user/raidboss/天音身位警察/音频11.mp3",
			"../../user/raidboss/天音身位警察/音频12.mp3",
			"../../user/raidboss/天音身位警察/音频13.mp3",
			"../../user/raidboss/天音身位警察/音频14.mp3",
			"../../user/raidboss/天音身位警察/音频15.mp3",
			"../../user/raidboss/天音身位警察/音频16.mp3",
		]
		.map((v, i, arr) => [{
				id: `天音身位警察 - 武士 - ${i + 1}`,
				type: "Ability",
				netRegex: {
					id: ["1D39", "1D3A"]
				},
				condition: (data, matches) =>
					matches.source === data.me && !/^(46)71\d003$/.test(matches.flags) && new Date(matches.timestamp)
					.getTime() % arr.length === i,
				sound: v,
				soundVolume: 0.5,
			},
			{
				id: `天音身位警察 - 龙骑 - ${i + 1}`,
				type: "Ability",
				netRegex: {
					id: ["58", "DE2", "DE4"]
				},
				condition: (data, matches) =>
					matches.source === data.me && !/^(3D|42)72\d003$/.test(matches.flags) && new Date(matches.timestamp)
					.getTime() % arr.length === i,
				sound: v,
				soundVolume: 0.5,
			},
			{
				id: `天音身位警察 - 钐镰客 - ${i + 1}`,
				type: "Ability",
				netRegex: {
					id: ["5F3E", "5F3F"]
				},
				condition: (data, matches) =>
					matches.source === data.me && !/^[BD]71\d003$/.test(matches.flags) && new Date(matches.timestamp)
					.getTime() % arr.length === i,
				sound: v,
				soundVolume: 0.5,
			},
			{
				id: `天音身位警察 - 忍者 - ${i + 1}`,
				type: "Ability",
				netRegex: {
					id: ["8CF", "DEB", "8D2"]
				},
				condition: (data, matches) =>
					matches.source === data.me && !/^(3F|32|41|19)71\d003$/.test(matches.flags) && new Date(matches.timestamp)
					.getTime() % arr.length === i,
				sound: v,
				soundVolume: 0.5,
			},
			{
				id: `天音身位警察 - 武僧 - ${i + 1}`,
				type: "Ability",
				netRegex: {
					id: ["38", "42"]
				},
				condition: (data, matches) =>
					matches.source === data.me && !/^(D|11|13|15|2E|3C)73\d003$/.test(matches.flags) && new Date(matches.timestamp)
					.getTime() % arr.length === i,
				sound: v,
				soundVolume: 0.5,
			},
			{
				id: `天音身位警察 - 蝰蛇剑士 - ${i + 1}`,
				type: "Ability",
				netRegex: {
					id: ["8732", "8733", "8734", "8735", "873D", "873E"]
				},
				condition: (data, matches) =>
					matches.source === data.me && !/^(3F|32|8)71\d003$/.test(matches.flags) && new Date(matches.timestamp)
					.getTime() % arr.length === i,
				sound: v,
				soundVolume: 0.5,
			},
		])
		.flat(),
});
