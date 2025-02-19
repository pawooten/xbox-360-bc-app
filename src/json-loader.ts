import data from '../data.json';
import settings from '../settings.json';
import { LogMessages } from './constants';
import { GameData } from './game-data';
import { Settings } from './settings';

export const load = (): GameData => {
    if (!data) {
        return { message: LogMessages.NoGameData(), error: true, games: [] };
    }
    if (!data.games || data.games.length === 0) {
        return { message: LogMessages.EmptyGameData(), error: true, games: [] };
    }
    return {message: LogMessages.GameDataFound(data.games.length), error: false, games: data.games };
};

export const loadSettings = (): Settings => {
    return settings;
};
