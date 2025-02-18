import data from '../data.json';
import settings from '../settings.json';

export const load = (): GameData => {
    if (!data) {
        return { message: 'No data.json found', error: true, games: [] };
    }
    if (!data.games || data.games.length === 0) {
        return { message: 'No games found in data.json', error: true, games: [] };
    }
    return {message: `${data.games.length} games found in data.json`, error: false, games: data.games };
};

export const loadSettings = (): Settings => {
    return settings;
};

export interface GameData {
    games: string[];
    error: boolean;
    message: string;
}
export interface Settings {
    port: number;
    minSearchLength: number;
    title: string;
}