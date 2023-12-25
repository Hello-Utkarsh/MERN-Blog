const jwt = require("jsonwebtoken");

const fetchuser = (req, res, next) => {
  try {
    let token = req.header("auth-token");
  
    if (!token || token == "null") {
      return res.status(404).json({ error: "please enter a token" });
    }
    
    let auth = jwt.verify(token, process.env.VITE_JWT_SECRET);
    req.user = auth.user;
    next();

  } catch (error) {

    res.status(401).send({error: error.message});
    
  }
};

module.exports = fetchuser;
