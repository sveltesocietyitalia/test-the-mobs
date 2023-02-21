import { SvelteKitAuth } from "@auth/sveltekit";
import Credentials from "@auth/core/providers/credentials";
import { GITHUB_ID, GITHUB_SECRET } from "$env/static/private";

export const handle = SvelteKitAuth({
    providers: [Credentials({
    type: "credentials",
    id: "credentials",
    credentials: {
      username: { label: "Username" },
      password: { label: "Password", type: "password" },
    },
    async authorize({ request }) {
      const response = await fetch(request);
      if (!response.ok) return null;
      return await response.json() ?? null;
    },
    }) as any],
    secret: "sveltesociety",
    
});
