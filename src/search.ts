import { GameData, Settings } from "./json-loader";

export const searchGames = (query: string, settings: Settings, gameData: GameData) => {
    if (!query || query.length === 0) {
        return { message: 'No search specified', games: [] };
    }
    if (query.length < settings.minSearchLength) {
        return { message: `${query} Too short, specify at least ${settings.minSearchLength} characters`, games: [] };
    }
    const matchingGames = gameData.games.filter((game) => {
        return game.toLowerCase().includes(query.toLowerCase());
    });
    if (matchingGames.length === 0) {
        return { message: `${query} No results found`, games: [] };
    }
    return { message: `'${query}' (${matchingGames.length})`, games: matchingGames };
};
