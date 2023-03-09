import { SvelteKitAuth } from "@auth/sveltekit";
import Credentials from "@auth/core/providers/credentials";
import type { User } from "@auth/core/types";
import type { Provider } from "@auth/core/providers";

export const handle = SvelteKitAuth({
  providers: [
    Credentials(
{
      type: "credentials",
      id: "credentials",
      authorize() {
        return {
          name: "Marco",
          email: "Marco@Sveltesociety.it",
        };
      },
    }),
  ],
});
