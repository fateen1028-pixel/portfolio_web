import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain_huggingface import ChatHuggingFace, HuggingFaceEndpoint
from langchain_core.messages import SystemMessage, HumanMessage, AIMessage
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app) # Allow Vercel frontend to call this

try:
    llm = HuggingFaceEndpoint(
        repo_id="openai/gpt-oss-120b", 
        task="text-generation",
        max_new_tokens=512,
        do_sample=False,
        repetition_penalty=1.03,
        provider="auto",
        # Make sure HUGGINGFACEHUB_API_TOKEN is in Vercel's .env
        huggingfacehub_api_token=os.environ.get('HUGGINGFACEHUB_API_TOKEN') 
    )
    model = ChatHuggingFace(llm=llm)
    print("Hugging Face model loaded successfully.")
except Exception as e:
    print(f"Error loading Hugging Face model: {e}")
    model = None

@app.route('/chat', methods=['POST'])
def chat():
    if model is None:
        return jsonify({"error": "Model is not loaded"}), 500

    data = request.json
    user_input = data.get('message')
    history = data.get('history', [])

    if not user_input:
        return jsonify({"error": "No message provided"}), 400

    chat_history = [SystemMessage(content="You are a helpful AI assistant")]
    
    for msg in history:
        if msg['role'] == 'user':
            chat_history.append(HumanMessage(content=msg['content']))
        elif msg['role'] == 'ai':
            chat_history.append(AIMessage(content=msg['content']))

    chat_history.append(HumanMessage(content=user_input))

    try:
        result = model.invoke(chat_history)
        ai_reply = result.content
        return jsonify({"reply": ai_reply})
    except Exception as e:
        print(f"Error during model invocation: {e}")
        return jsonify({"error": "Failed to get response from model"}), 500

#
# ---- IMPORTANT: DO NOT include the app.run() block ----
#
# if __name__ == '__main__':
#     app.run(debug=True, port=5000)
#
# (Vercel handles running the server automatically)