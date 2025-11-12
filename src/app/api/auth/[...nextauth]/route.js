import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/dbConnect";
import Admin from "@/models/Admin";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await dbConnect();
        const admin = await Admin.findOne({ email: credentials.email });
        if (!admin) throw new Error("Invalid email or password");

        const isValid = await bcrypt.compare(credentials.password, admin.password);
        if (!isValid) throw new Error("Invalid email or password");

        return { id: admin._id, email: admin.email };
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/admin/login" },
});

export { handler as GET, handler as POST };
