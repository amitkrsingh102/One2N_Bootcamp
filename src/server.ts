import express from "express";

(async () => {
	const app = express();

	app.use(express.json({ limit: "25mb" }));
	app.use(express.urlencoded({ extended: true }));
	// Express configuration
	app.set("port", process.env.PORT || 3000);

	process.on("unhandledRejection", (error: Error) => {
		console.error("unhandledRejection", error);
	});

	// handle uncaught exception
	process.on("uncaughtException", (error: Error) => {
		console.error("uncaughtException", error);
	});

	/**
	 * Start Express server.
	 */

	const server = app.listen(app.get("port"), () => {
		console.log(
			`App is running at http://localhost:${app.get("port")} in ${app.get(
				"env"
			)} mode`
		);
		console.log("Press CTRL-C to stop\n");
	});

	return { server, app };
})();
