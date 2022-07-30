// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import * as googleTTS from "google-tts-api"; // ES6 or TypeScript

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Object>
) {
  const { number, chanel, type } = req.query;
  let numberStr = number;

  const msg = `ขอเชิญ........หมายเลข........ ${numberStr} ........ช่องที่........ ${chanel} ......ค่ะ`;
  googleTTS
    .getAudioBase64(msg, {
      lang: "th",
      slow: true,
      host: "https://translate.google.com",
      timeout: 10000,
    })
    .then((base64: any) => {
      const buffer = Buffer.from(base64, "base64");
      const path = `./public/mp3/${number}_${chanel}.mp3`;
      //const queue = { number: number, type: type };
      if (fs.existsSync(path)) {
        //file exists
        console.log("file exist");
      } else {
        fs.writeFileSync(path, buffer, {
          encoding: "base64",
        });
      }
    }) // base64 text
    .catch(console.error);

  res.status(200).json({ status: "success" });
}
