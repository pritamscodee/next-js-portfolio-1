import { Octokit } from "octokit";
import { NextResponse, NextRequest } from "next/server";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { error: "Username is Required" },
      { status: 401 }
    );
  }

  try {
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
            repositories(ownerAffiliations: OWNER, first: 100) {
              totalCount
              nodes {
                stargazerCount
              }
            }
            followers {
              totalCount
            }
          }
        }
      `;

    const response = await octokit.graphql(query, { username });
    // @ts-expect-error - GraphQL response type inference
    const calendar = response.user.contributionsCollection.contributionCalendar;

    // @ts-expect-error - calendar type not fully inferred
    const contributions = calendar.weeks.flatMap((week) =>
      // @ts-expect-error - week type not fully inferred
      week.contributionDays.map((day) => ({
        count: day.contributionCount,
        date: day.date,
      }))
    );

    // @ts-expect-error - user type not fully inferred
    const totalStars = response.user.repositories.nodes.reduce(
      (sum: number, repo: { stargazerCount: number }) => sum + repo.stargazerCount,
      0
    );

    return NextResponse.json({
        user:{
            totalContribution: calendar.totalContributions,
            // @ts-expect-error - user type not fully inferred
            totalRepos: response.user.repositories.totalCount,
            totalStars,
            // @ts-expect-error - user type not fully inferred
            followers: response.user.followers.totalCount,
        },
        contributions
    })
  } catch (error) {
    console.error("GITHUB API ERROR" , error)
    return NextResponse.json(
        {error:"Failed to fetch github Data"},
        {status:500}
    )
  }
}
