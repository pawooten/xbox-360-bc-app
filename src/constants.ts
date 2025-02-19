export const Directories = {
    Public: 'public',
};

export const LogMessages = {
    NoGameData: () => 'No data.json found',
    EmptyGameData: () => 'No games found in data.json',
    GameDataFound: (count: number) => `${count} games found in data.json`,
    ServerIsRunning: (port: number) => `Server is running on port ${port}`,
};

export const RoutePaths = {
    Search: '/search',
};

export const QueryParameters = {
    Query: 'q',
};
