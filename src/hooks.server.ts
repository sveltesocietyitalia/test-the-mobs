import { SvelteKitAuth } from "@auth/sveltekit";
import Credentials from "@auth/core/providers/credentials";

export const handle = SvelteKitAuth({
  providers: [
    Credentials(
      {
        type: "credentials",
        id: "credentials",
        credentials: {
          username: { name: "username", label: "username" },
          password: { name: "password", label: "password" },
        },
        authorize(credentials) {
          if (!credentials?.username || !credentials?.password) {
            return null;
          }
          return {
            id: "fas5987fguyvhdafa",
            name: "Marco",
            email: "Marco@Sveltesociety.it",
          };
        },
      },
    ),
  ],
  secret: "sveltesociety",
  trustHost: true,
});
