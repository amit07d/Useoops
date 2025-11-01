import jwt from "jsonwebtoken";

const authMiddlewre = (req, res, next) => {
  const authHeaders = req.headers.authorization;
  if (!authHeaders || !authHeaders.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Authorization token missing or Invalid",
    });
    }
    
    const token = authHeaders.split(" ")[1]
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY)
        console.log(decodedToken);
        req.userInfo = decodedToken
        next()
        
    } catch (error) {
        res.status(403).json({ message: "Access denied. No token provided or format is invalid" });
    }
};


export default authMiddlewre