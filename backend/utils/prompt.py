# Functions for creating prompts

def create_prompt(query: str, context: str) -> str:
    prompt = f"Here is some context: {context}.\n\n Using the context above, answer this search query: {query}."
    return prompt