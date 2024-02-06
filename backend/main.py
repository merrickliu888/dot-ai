from fastapi import FastAPI
from pydantic import BaseModel
import llm_api.cohere_api as llm
from fastapi.middleware.cors import CORSMiddleware
from utils.prompt import create_prompt

class Query(BaseModel):
    query: str
    context: str

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://www.google.com"],
    allow_methods=["POST"],
)

@app.post("/predict")
def predict(request: Query):
    prompt = create_prompt(request.query, request.context)
    answer = llm.answer_prompt(prompt)
    return {"text": answer}
    
