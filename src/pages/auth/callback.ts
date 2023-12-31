import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
  const authCode = url.searchParams.get("code");

  if (!authCode) {
    return new Response("No code provided", { status: 400 });
  }

  const res = await fetch(
    import.meta.env.PUBLIC_API_BASE_URL +
      "/auth/callback?" +
      new URLSearchParams({
        code: authCode,
      }),
    {
      method: "GET",
    }
  );

  const data = await res.json();
  if (!data.token) return new Response("No token provided", { status: 400 });

  cookies.set("token", data.token, {
    path: "/",
  });

  return redirect("/register");
};
