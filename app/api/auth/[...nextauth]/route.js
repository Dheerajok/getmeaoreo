import nextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import User from "@/app/models/User";
import connectDB from "@/app/db/ConnectDb";
import { fetchUser } from "@/app/actions/useractions";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = nextAuth({
  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUBLOGIN_ID,
      clientSecret: process.env.GITHUBLOGIN_SECRET
    }),GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })

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
          stripeID: "",
          stripeSecrat: "",
          donerArr:[],
          urlName:""
        })


      }
      return true;
    },async session({ session, user, token }) {

      const fUser=await fetchUser(session.user.email);
      session.user.name=fUser.name
      session.user.tagline=fUser.tagline
      session.user.stripeID=fUser.stripeID
      session.user.stripeSecrat=fUser.stripeSecrat
      session.user.donerArr=fUser.donerArr
      session.user.url=fUser.urlName
  
      return session;

      
    }
  }
})

export { authOptions as GET, authOptions as POST }
