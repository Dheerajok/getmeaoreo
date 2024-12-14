
import nextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import User from "@/app/models/User";
import connectDB from "@/app/db/ConnectDb";
import { fetchUser } from "@/app/actions/useractions";


export const authOptions = nextAuth({
  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),

  ], callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
        await connectDB()
      // const client=await mongoose.connect('mongodb://localhost:27017/getmeoreo');
      const check = await User.findOne({ email: user.email })
      if (check == null) {

        const newUser = await User.create({
          name: "",
          email: user.email,
          tagline: "",
          rozarpayID: "",
          rozarpaySecrat: "",
          donerArr:[],
          urlName:""
        })


      }
      return true;
    },async session({ session, user, token }) {

      const fUser=await fetchUser(session.user.email);
      session.user.name=fUser.name
      session.user.tagline=fUser.tagline
      session.user.rozarpayID=fUser.rozarpayID
      session.user.rozarpaySecrat=fUser.rozarpaySecrat
      session.user.donerArr=fUser.donerArr
      session.user.url=fUser.urlName
  
      return session;

      
    }
  }
})

export { authOptions as GET, authOptions as POST }
