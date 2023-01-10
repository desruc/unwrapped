import { NextAuthOptions } from "next-auth";
import type { JWT } from "next-auth/jwt";
import SpotifyProvider from "next-auth/providers/spotify";
import { SPOTIFY_LOGIN_URL } from "../config/spotify";

async function refreshAccessToken(token: JWT) {
  // TODO: Refresh token
  return token;
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    SpotifyProvider({
      clientId: process.env.CLIENT_ID ?? "No client id",
      clientSecret: process.env.CLIENT_SECRET ?? "No client secret",
      authorization: SPOTIFY_LOGIN_URL,
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          accessTokenExpires: account.expires_at,
        };
      }

      if (token.accessTokenExpires && Date.now() < token.accessTokenExpires) {
        return token;
      }

      return await refreshAccessToken(token);
    },
    async session({ token, session }) {
      if (token) {
        session.user.accessToken = token.accessToken;
        session.user.refreshToken = token.refreshToken;
      }

      return session;
    },
  },
};
