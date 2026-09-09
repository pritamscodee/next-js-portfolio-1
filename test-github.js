const { Octokit } = require("octokit");
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
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
