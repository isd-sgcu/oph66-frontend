import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
  const authCode = url.searchParams.get("code");

  if (!authCode) {
    return new Response("No code provided", { status: 400 });
  }

  const res = await fetch(
    import.meta.env.PUBLIC_API_BASE_URL +
      "/auth/callback" +
      new URLSearchParams({
        code: authCode,
      }),
    {
      method: "GET",
    }
  );
  const { data, error } = await res.json();

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  const { access_token, refresh_token } = data.token;

  cookies.set("sb-access-token", access_token, {
    path: "/",
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/",
  });

  return redirect("/");
};
