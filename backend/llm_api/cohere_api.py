import cohere
from dotenv import load_dotenv
import os

load_dotenv()
co = cohere.Client(os.environ['COHERE_API_KEY'])

def answer_prompt(prompt: str) -> str:
    response = co.generate(prompt)
    print(response.generations[0].text)
    return response.generations[0].text