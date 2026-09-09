const { Octokit } = require("octokit");
const octokit = new Octokit({
  auth: "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",
});

const query = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
      repositories(ownerAffiliations: OWNER) {
        totalCount
      }
      stargazerCount
      followers {
        totalCount
      }
    }
  }
`;

octokit
  .graphql(query, { username: "pritamscodee" })
  .then((r) => console.log(JSON.stringify(r, null, 2)))
  .catch((e) => {
    console.error("ERROR:", e.message);
    if (e.response) console.error("Response:", JSON.stringify(e.response, null, 2));
  });
