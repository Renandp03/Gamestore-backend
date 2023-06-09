import userRouter from "./user-routes.js";
import authRouter from "./auth-router.js";
import gameRouter from "./game-router.js";
import favoritesRouter from "./favorite-router.js";

const routes = [userRouter, authRouter, gameRouter, favoritesRouter];

export default routes;