import { NextAuthOptions } from "next-auth";

export const authOptions = {
    adapter: Adapters(prisma),
    providers: []
} satisfies NextAuthOptions;
