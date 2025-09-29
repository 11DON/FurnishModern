import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET||"supersecretkey";

export const protect = (req,res,next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if(!token) return res.status(401).json({error :"No Token Provided"});
    
    jwt.verify(token,JWT_SECRET,(err,decoded) => {
        if(err) return res.status(403).json({error:"Invalid Token"});
        req.user=decoded;

        next();
    })
}