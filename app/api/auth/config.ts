import GitHubProvider from 'next-auth/providers/github'
import { NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.avatar_url,
          login: profile.login,
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const allowedUsers = ['nathanmota-dev', 'Leonardo-781', 'brlacerra']
      // @ts-ignore – `login` só existe no perfil do GitHub
      return allowedUsers.includes(user.login)
    },
  },
  pages: {
    error: '/unauthorized',
  },
}