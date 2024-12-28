let messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toDateString(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toDateString(),
  },
];

// @desc get index page
// @route GET /
export const getIndex = (req, res) => {
  res
    .status(200)
    .render("index", { title: "Messageboard", messages: messages });
};

// @desc get new message form page
// @route GET /new
export const getForm = (req, res) => {
  res.status(200).render("new", { title: "New Message Form" });
};

// @desc post new message
// @route POST /new
export const newMessage = (req, res, next) => {
  let author = req.body.author;
  let msg = req.body.message;

  if (!author || !msg) {
    const error = new Error("Please fill in the entire form");
    error.status = 400;
    return next(error);
  }

  messages.push({ text: msg, user: author, added: new Date().toDateString() });
  res.status(201).redirect("/");
};
