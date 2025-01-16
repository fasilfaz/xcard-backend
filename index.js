import authRouter from "./src/modules/auth/routes/auth.routes.js";
import groupRouter from "./src/modules/group/routes/group.routes.js";
import profileRouter from "./src/modules/profile/routes/profile.routes.js";
import userRouter from "./src/modules/user/routes/user.routes.js";
import publicRouter from "./src/modules/profile/routes/public.routes.js";
import informationRouter from "./src/modules/info/routes/info.routes.js";

/**
 * @route  Index Route
 * @desc   Used to mix multiple routes
 */
const routes = (app) => {
  app.use("/profile", publicRouter);
  app.use("/information", informationRouter);
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/profile", profileRouter);
  app.use("/api/v1/group", groupRouter);
};

export default routes;
