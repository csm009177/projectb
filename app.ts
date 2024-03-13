import express, { Request, Response } from "express"; // npm install express @types/express
import next from "next";

import multer from "multer"; // npm install multer @types/multer
import path from "path"; // npm install path @types/path

// 이미지를 저장할 디렉토리 경로
const UPLOAD_DIR = path.join(__dirname, "uploads");

// multer 설정
const upload = multer({
  dest: UPLOAD_DIR,
  limits: {
    fileSize: 10 * 1024 * 1024, // 최대 파일 크기 (10MB)
  },
});


// Next.js 애플리케이션을 설정합니다.
const app = next({ dev: process.env.NODE_ENV !== "production" });

// Next.js 애플리케이션의 요청 핸들러를 가져옵니다.
const handle = app.getRequestHandler();

// Next.js 애플리케이션을 준비합니다.
app.prepare().then(() => {
  // Express 서버를 생성합니다.
  const server = express();

  // JSON 파싱을 위한 미들웨어를 추가합니다. 요청 본문의 크기 제한을 10MB로 설정합니다.
  server.use(express.json({ limit: "10mb" }));

  // URL 인코딩을 위한 미들웨어를 추가합니다. extended 옵션을 true로 설정하여 객체나 배열 형태의 복잡한 요청 본문을 파싱할 수 있도록 합니다.
  server.use(express.urlencoded({ extended: true, limit: "10mb" }));

  // 이미지 업로드를 처리하는 라우트
  server.post("/upload", upload.single("image"), (req, res) => {
    // 업로드된 파일 정보 확인
    if (!req.file) {
      res.status(400).send("이미지 파일이 전송되지 않았습니다.");
      return;
    }

    // 파일 업로드 성공 시 응답
    res.status(200).send("이미지가 성공적으로 업로드되었습니다.");
  });

  // 나머지 엔드포인트도 비슷한 방식으로 작성 가능

  server.all("*", (req: Request, res: Response) => {
    return handle(req, res);
  });

  const port: number = 3000;
  server.listen(port, (err?: any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
