import express from "express";
import { auth, requiresAuth } from "express-openid-connect";
import cors from "cors";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
import axios from "axios";
import { authMiddleware } from "./authMiddleware";
import cookieParser from "cookie-parser";

dotenv.config();

export const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: process.env.AUTH0_SECRET!,
//   baseURL: process.env.AUTH0_BASE_URL,
//   clientID: process.env.AUTH0_CLIENT_ID!,
//   issuerBaseURL: process.env.AUTH0_DOMAIN!,
//   clientSecret: process.env.AUTH0_CLIENT_SECRET,
// };

// auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

app.get("/api/auth/login", (req, res) => {
  console.log("call here");
  const redirectUri = encodeURIComponent(
    "http://localhost:4000/api/auth/callback"
  );

  const authUrl =
    `https://${process.env.AUTH0_DOMAIN}/authorize?` +
    `response_type=code&client_id=${process.env.AUTH0_CLIENT_ID}&` +
    `redirect_uri=${redirectUri}&scope=openid profile email`;

  res.redirect(authUrl);
});

app.get("/api/auth/callback", async (req, res) => {
  const code = req.query.code;
  const redirectUri = "http://localhost:4000/api/auth/callback";

  const response = await axios.post(
    `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
    {
      grant_type: "authorization_code",
      client_id: process.env.AUTH0_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET,
      code,
      redirect_uri: redirectUri,
    },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  console.log("user info", response.data);
  const { access_token, id_token } = response.data;

  // Decode the ID token to get user info
  const userInfo = jwt.decode(id_token);
  // Save user to DB if needed

  console.log("user info decoded", userInfo);

  // Save token/session in cookie (or your strategy)
  res.cookie("session", id_token, { httpOnly: true });

  res.redirect("http://localhost:3000");
});

app.get("/api/auth/logout", (req, res) => {
  res.clearCookie("session");
  const returnTo = encodeURIComponent("http://localhost:3000");
  const logoutUrl =
    `https://${process.env.AUTH0_DOMAIN}/v2/logout?` +
    `client_id=${process.env.AUTH0_CLIENT_ID}&` +
    `returnTo=${returnTo}`;

  res.redirect(logoutUrl);
});

app.get("/api/auth/me", authMiddleware, (req: any, res) => {
  console.log("user info", req.user);
  res.json({ user: req.user });
});
