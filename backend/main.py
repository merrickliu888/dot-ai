from fastapi import FastAPI
from pydantic import BaseModel
import llm_api.cohere_api as llm
from fastapi.middleware.cors import CORSMiddleware

class Query(BaseModel):
    query: str

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://www.google.com"],
    allow_methods=["POST"],
)

@app.post("/predict")
def predict(request: Query):
    return {"text": llm.answer_prompt(request.query)}
    
