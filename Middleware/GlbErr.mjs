export default (err, _req, res, _next) => {
  res.status(500 || err.status).json({ msg: "Server Error" });
};