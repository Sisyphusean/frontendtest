/**
 * Represents the shape of data returned by the GitHub API for a user search.
 */
interface GithubSearchResult {
    /** The total number of search results. */
    total_count: number;
    /** Indicates whether the search results are complete or partial. */
    incomplete_results: boolean;
    /** An array of objects representing user search results. */
    items: GithubUser[];
}

/**
 * Represents a single user returned in a GitHub search result.
 */
interface GithubUser {
    /** The user's GitHub username. */
    login: string;
    /** The user's unique ID. */
    id: number;
    /** The user's unique node ID. */
    node_id: string;
    /** The URL for the user's avatar image. */
    avatar_url: string;
    /** The user's Gravatar ID. */
    gravatar_id: string;
    /** The user's profile URL. */
    url: string;
    /** The user's GitHub profile URL. */
    html_url: string;
    /** The URL for the user's followers. */
    followers_url: string;
    /** The URL for the user's following list. */
    following_url: string;
    /** The URL for the user's gists. */
    gists_url: string;
    /** The URL for the user's starred repositories. */
    starred_url: string;
    /** The URL for the user's subscriptions. */
    subscriptions_url: string;
    /** The URL for the user's organizations. */
    organizations_url: string;
    /** The URL for the user's repositories. */
    repos_url: string;
    /** The URL for the user's events. */
    events_url: string;
    /** The URL for the user's received events. */
    received_events_url: string;
    /** The user's account type. */
    type: string;
    /** Indicates whether the user is a site admin. */
    site_admin: boolean;
    /** A score indicating how closely the user matches the search criteria. */
    score: number;
}

/**
Interface for the error object returned by fetcher function.
@interface FetchError
@property {number} status - The HTTP status code of the error.
@property {Object} info - Extra information about the error returned by the server.
*/
interface fetcherError extends Error {
    info?: any,
    status?: number
}


export { GithubSearchResult, GithubUser, fetcherError }
