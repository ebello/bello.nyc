import { Handlers } from "$fresh/server.ts";

const ernHachyderm = {
  "subject": "acct:ern@hachyderm.io",
  "aliases":
  [
    "https://hachyderm.io/@ern",
    "https://hachyderm.io/users/ern"
  ],
  "links":
  [
    {
      "rel": "http://webfinger.net/rel/profile-page",
      "type": "text/html",
      "href": "https://hachyderm.io/@ern"
    },
    {
      "rel": "self",
      "type": "application/activity+json",
      "href": "https://hachyderm.io/users/ern"
    },
    {
      "rel": "http://ostatus.org/schema/1.0/subscribe",
      "template": "https://hachyderm.io/authorize_interaction?uri={uri}"
    }
  ]
}

const aliases = ['ernie@bello.nyc', 'ern@bello.nyc']

export const handler: Handlers = {
  GET(req) {
    const url = new URL(req.url);
    const resource = url.searchParams.get("resource") ?? "";
    const [, acct] = resource.includes(':') ? resource.split(':') : []
    if (aliases.includes(acct)) {
      return new Response(JSON.stringify(ernHachyderm), {
        headers: { "Content-Type": "application/jrd+json" },
      });
    }
    return new Response('', {
      status: 404,
      headers: {
        'Content-Type': 'text/html'
      }
    });
  },
};
