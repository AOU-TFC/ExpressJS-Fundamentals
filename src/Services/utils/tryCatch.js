const tryCatch = controller => (req, res, next) => {
  try {
    controller(req, res);
  } catch (err) {
    next(err);
  }
};

module.exports = tryCatch;
