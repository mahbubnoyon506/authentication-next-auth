import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from 'next-auth/providers/credentials';
import connectMongo from '@/database/connection';
import Users from '@/database/model/userModel';
import { compare } from 'bcryptjs';
export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
          }),
          CredentialsProvider({
             name: 'Credentials',
             async authorize(credentials, req){
                connectMongo().catch(error => {error: 'Connection failed..!'})
                //check user existance
                const result = await Users.findOne({email: credentials.email})
                if(!result){
                    throw new Error('No user found with that email')
                }
                //compare
                const checkPassword = await compare(credentials.password, result.password)
                if(!checkPassword || result.email !== credentials.email){
                    throw new Error('Username or Password mismatch')
                }
                return result;
             }
          })
    ]
})