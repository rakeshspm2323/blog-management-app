// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnection from "@/lib/mongodb";

export default function handler(req, res) {
  dbConnection()
  res.status(200).json({ name: "John Doe" });
}
