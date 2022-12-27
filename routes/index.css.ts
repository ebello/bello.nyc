import { Handlers } from "$fresh/server.ts";

const CSS = `
:root {
  --system-ui: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
body {
  background-color: #134376;
  color: #fff;
  font-family: var(--system-ui);
  margin: 0;
}
main {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
h1 {
  font-size: 2rem;
}
`;

export const handler: Handlers = {
  GET: () => {
    return new Response(CSS, {
      headers: {
        "content-type": "text/css",
        "cache-control": "public, max-age=31536000, immutable",
      },
    });
  },
};
