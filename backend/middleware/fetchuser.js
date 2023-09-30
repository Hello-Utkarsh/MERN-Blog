const jwt = require("jsonwebtoken");

const fetchuser = (req, res, next) => {
  let token = req.header("auth-token");

  if (!token) {

    res.status(401).send({ error: "please enter valid token" });
  }
  try {

    let auth = jwt.verify(token, process.env.VITE_JWT_SECRET);
    req.user = auth.user;
    console.log(req.user)
    next();

  } catch (error) {

    res.status(401).send({error: error.message});
    
  }
};

module.exports = fetchuser;
