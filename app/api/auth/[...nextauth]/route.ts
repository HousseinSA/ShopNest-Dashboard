import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import type { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    {
      id: "guest",
      name: "Guest",
      type: "credentials",
      credentials: {},
      authorize: async () => {
        return { id: "guest", name: "Guest User", email: null };
      },
    },
  ],
  pages: {
    signIn: '/auth/signin', // Custom sign-in page
  },
  session: {
    strategy: "jwt", // Use JWT strategy for sessions
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET, // Ensure this secret is the same in both projects
  },
  // cookies: {
  //   sessionToken: {
  //     name: `next-auth.session-token`,
  //     options: {
  //       httpOnly: true,
  //       secure: process.env.NODE_ENV === 'production', // True in production
  //       sameSite: "none",
  //       path: "/",
  //     },
  //   },
  // },
  
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token 
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id; // Include user ID in session
      }
      return session
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }; 
