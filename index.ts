import express, { Request, Response } from "express";
import path from "path";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.get("/ok", (req: Request, res: Response) => {
  res.status(200).send("<h1>OK</h1>");
});

app.get("/fail", (req: Request, res: Response) => {
  res.status(500).send("<h1>Internal Server Error</h1>");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
