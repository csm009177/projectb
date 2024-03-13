from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # 모든 출처 허용 시 ["*"] 사용 가능
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],  # 허용할 HTTP 메소드
    allow_headers=["*"],  # 허용할 헤더
)
@app.get("/")
async def read_root():
    return {"key" : "Hello World Developer"}