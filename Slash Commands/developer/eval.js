module.exports = {
  code: `
    $onlyIf[$or[$authorID==1273256222715285527;$authorID==1081603071118938123]==true;
      $ephemeral
      You are not allowed to use this command
    ]
    $eval[$option[code]]
  `,
  data: {
    name: "eval",
    description: "runs the given code",
    options: [
      {
        type: 3,
        name: "code",
        description: "the code to run",
        required: true,
      },
    ],
  },
};