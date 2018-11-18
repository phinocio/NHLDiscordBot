interface INextGameData {
	date: string;
	times: {
		pt: string,
		mt: string,
		ct: string,
		et: string,
		at: string,
		aedt: string
	};
	away: {
		team: string,
		record: string
	};
	home: {
		team: string,
		record: string
	};
	venue: string;
}

export default INextGameData;
