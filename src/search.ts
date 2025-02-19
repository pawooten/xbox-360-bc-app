import { LogMessages } from "./constants";
import { GameData } from "./game-data";
import { Settings } from "./settings";

export const searchGames = (query: string, settings: Settings, gameData: GameData) => {
    if (!query || query.length === 0) {
        return { message: LogMessages.NoSearchSpecified(), games: [] };
    }
    if (query.length < settings.minSearchLength) {
        return { message: LogMessages.SearchTooShort(query, settings.minSearchLength), games: [] };
    }
    const matchingGames = gameData.games.filter((game) => {
        return game.toLowerCase().includes(query.toLowerCase());
    });
    if (matchingGames.length === 0) {
        return { message: LogMessages.NoResultsFound(query), games: [] };
    }
    return { message: LogMessages.ResultsFound(query, matchingGames.length), games: matchingGames };
};
