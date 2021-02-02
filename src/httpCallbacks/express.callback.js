export default function expressCallback(controller, controllerFunction) {
	return async (req, res) => {
		try {
			const httpRequest = {
				body: req.body,
				query: req.query,
				params: req.params,
				ip: req.ip,
				method: req.method,
				path: req.path,
				headers: req.headers,
			}
			const response = await controller[controllerFunction](httpRequest);

			res.set(response.headers)
			res.status(response.status).json(response.data);
		} catch (e) {
			res.status(500).message('Something went wrong!')
		}

	}
}