addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  return new Response("V2Ray is running on Cloudflare Workers!", {
    status: 200,
    headers: { "content-type": "text/plain" },
  });
}
