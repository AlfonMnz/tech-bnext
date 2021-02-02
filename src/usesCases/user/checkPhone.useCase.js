export default function makeCheckPhoneUC(axios) {
	return async function checkPhoneUC(phone) {
		try {
			const axiosConfig = {
				headers: {
					"user-id": process.env.NEUTRINO_USER_ID,
					"api-key": process.env.NEUTRINO_API_KEY,
				},
			}

			let phoneInfo = await axios.post('https://neutrinoapi.net/phone-validate', {
				"number": phone,
			}, axiosConfig);

			return phoneInfo.data["is-mobile"];
		} catch (e) {
			throw e;
		}
	}
}