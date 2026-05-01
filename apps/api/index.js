const http = require("http");

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ status: "ok", app: "CampaignDrop API" }));
}).listen(process.env.PORT || 3001, () => {
  console.log("CampaignDrop API running on port", process.env.PORT || 3001);
});
