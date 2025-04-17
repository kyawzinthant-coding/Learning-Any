import express from "express";
import { auth, requiresAuth } from "express-openid-connect";
import cors from "cors";

export const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "a long, randomly-generated string stored in env",
  baseURL: "http://localhost:3000",
  clientID: "Uhvf8rIPIweeJvM5KTbn2yk279SlJmBk",
  issuerBaseURL: "https://dev-ig355dx0qv20orkp.us.auth0.com",
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

app.get("/profile", (req: any, res) => {
  if (req.oidc.isAuthenticated()) {
    res.json(req.oidc.user);
  } else {
    res.status(401).send("Not logged in");
  }
});
