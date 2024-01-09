import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ cookies, redirect }) => {
  cookies.delete("token", { path: "/" });
  cookies.delete("idcard", { path: "/" });
  return redirect("/login");
};
