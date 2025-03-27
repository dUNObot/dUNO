module.exports = {
    code: `
    $onlyIf[$getUserVar[inparty;$authorID]!=false;You don't have a party yet!]
    $arrayLoad[arr;,;$getUserVar[party;$getUserVar[party_owner;$authorID]]]
    $arrayLoad[newArr]
    $arrayForEach[arr;i;$arrayPush[newArr;$username[$env[i]]]]
    $let[users;$arrayJoin[newArr;\n]]
    Your party:\n$get[users]
    `,
    data: {
        name: "view",
        description: "Views your current party",
    },
};