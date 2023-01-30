import { NextAuthOptions } from "next-auth";
import type { JWT } from "next-auth/jwt";
import SpotifyProvider from "next-auth/providers/spotify";
import { spotifyApi, SPOTIFY_LOGIN_URL } from "./spotify";

async function refreshAccessToken(token: JWT) {
  if (token.accessToken && token.refreshToken) {
    try {
      spotifyApi.setAccessToken(token.accessToken);
      spotifyApi.setRefreshToken(token.refreshToken);

      const { body: newTokens } = await spotifyApi.refreshAccessToken();

      return {
        ...token,
        accessToken: newTokens.access_token,
        accessTokenExpires: newTokens.expires_in * 1000,
        refreshToken: newTokens.refresh_token ?? token.refreshToken
      };
    } catch (error) {
      console.error(error);
    }
  }

  return token;
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login"
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID ?? "No client id",
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET ?? "No client secret",
      authorization: SPOTIFY_LOGIN_URL
    })
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          accessTokenExpires: (account.expires_at ?? 3600) * 1000
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
    }
  }
};
