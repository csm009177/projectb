from fastapi import FastAPI

# FastAPI 인스턴스 생성
app = FastAPI()

# 라우트 생성
@app.get("/")
def read_root():
    return {"Hello": "World"}