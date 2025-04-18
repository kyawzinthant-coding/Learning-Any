import jwt from "jsonwebtoken";

// Middleware to extract user from JWT
export const authMiddleware = (req: any, res: any, next: any) => {
  const token = req.cookies.session;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.decode(token);
    console.log(decoded);
    req.user = decoded; // Attach user info to the request
    next();
  } catch (err) {
    console.error("JWT decode failed:", err);
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};
