import { team } from '../Config/Config';

const root = 'https://statsapi.web.nhl.com/api/v1';

const api = {
	team: `${root}/teams/${team.id}`,
	nextGame: `${root}/teams/${team.id}?expand=team.schedule.next`
};

export { api };
