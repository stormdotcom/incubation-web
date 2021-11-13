import jwt from "jsonwebtoken";

const auth = (req, res, next)=>{
    try {
        const token =req.headers.Authorization.split(" ")[1];
        let decode;
        if(token){
            decode=jwt.verify(token, "secret")
        }
        else {
            return res.status(200).res.json({message: "Unauthenticated", error: true})
        }
        next();
    }catch(err){
        console.log(err.message)
    }
}
export default auth;