import express from "express";
import messages from "./routes/index-router.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/not-found.js";
const port = process.env.PORT || 8888;

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger Middleware
app.use(logger);

// Setup EJS
app.set("view engine", "ejs");
app.set("views", "views");

// Routes
app.use("/", messages);
app.use("/new", messages);

// Error Handler
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
