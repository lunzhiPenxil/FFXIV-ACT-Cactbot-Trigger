Options.Triggers.push({
    zoneId: ZoneId.MatchAll,
    triggers: [].concat(
        [
            "../../user/raidboss/风灵月影宗T职/启动.mp3",
        ]
        .map((v, i, arr) => [{
                id: `风灵月影宗T职 - 启动 - 骑士 - ${i + 1}`,
                type: "Ability",
                netRegex: {
                    id: ["1C"]
                },
                condition: (data, matches) =>
                    matches.source === data.me && new Date(matches.timestamp).getTime() % arr.length === i,
                sound: v,
                soundVolume: 0.5,
            },
            {
                id: `风灵月影宗T职 - 启动 - 战士 - ${i + 1}`,
                type: "Ability",
                netRegex: {
                    id: ["30"]
                },
                condition: (data, matches) =>
                    matches.source === data.me && new Date(matches.timestamp).getTime() % arr.length === i,
                sound: v,
                soundVolume: 0.5,
            },
            {
                id: `风灵月影宗T职 - 启动 - 暗黑骑士 - ${i + 1}`,
                type: "Ability",
                netRegex: {
                    id: ["E2D"]
                },
                condition: (data, matches) =>
                    matches.source === data.me && new Date(matches.timestamp).getTime() % arr.length === i,
                sound: v,
                soundVolume: 0.5,
            },
            {
                id: `风灵月影宗T职 - 启动 - 绝枪战士 - ${i + 1}`,
                type: "Ability",
                netRegex: {
                    id: ["3F0E"]
                },
                condition: (data, matches) =>
                    matches.source === data.me && new Date(matches.timestamp).getTime() % arr.length === i,
                sound: v,
                soundVolume: 0.5,
            },
        ])
        .flat(),
        [
            "../../user/raidboss/风灵月影宗T职/关闭.mp3",
        ]
        .map((v, i, arr) => [{
                id: `风灵月影宗T职 - 关闭 - 骑士 - ${i + 1}`,
                type: "Ability",
                netRegex: {
                    id: ["7D41"]
                },
                condition: (data, matches) =>
                    matches.source === data.me && new Date(matches.timestamp).getTime() % arr.length === i,
                sound: v,
                soundVolume: 0.5,
            },
            {
                id: `风灵月影宗T职 - 关闭 - 战士 - ${i + 1}`,
                type: "Ability",
                netRegex: {
                    id: ["7D42"]
                },
                condition: (data, matches) =>
                    matches.source === data.me && new Date(matches.timestamp).getTime() % arr.length === i,
                sound: v,
                soundVolume: 0.5,
            },
            {
                id: `风灵月影宗T职 - 关闭 - 暗黑骑士 - ${i + 1}`,
                type: "Ability",
                netRegex: {
                    id: ["7D43"]
                },
                condition: (data, matches) =>
                    matches.source === data.me && new Date(matches.timestamp).getTime() % arr.length === i,
                sound: v,
                soundVolume: 0.5,
            },
            {
                id: `风灵月影宗T职 - 关闭 - 绝枪战士 - ${i + 1}`,
                type: "Ability",
                netRegex: {
                    id: ["7D44"]
                },
                condition: (data, matches) =>
                    matches.source === data.me && new Date(matches.timestamp).getTime() % arr.length === i,
                sound: v,
                soundVolume: 0.5,
            },
        ])
        .flat(),
    )
});
