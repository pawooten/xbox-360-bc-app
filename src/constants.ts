export const Directories = {
    Public: 'public',
};

export const LogMessages = {
    NoGameData: () => 'No data.json found',
    EmptyGameData: () => 'No games found in data.json',
    GameDataFound: (count: number) => `${count} games found in data.json`,
    ServerIsRunning: (port: number) => `Server is running on port ${port}`,
    NoSearchSpecified: () => 'No search specified',
    SearchTooShort: (query: string, minLength: number) => `Search term '${query}' is too short. Minimum length is ${minLength}`,
    ResultsFound: (query: string, count: number) => `'${query}' (${count})`,
    NoResultsFound: (query: string) => `${query} No results found`,
};

export const RoutePaths = {
    Search: '/search',
};

export const QueryParameters = {
    Query: 'q',
};
