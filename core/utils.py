import requests
import json


def get_evaluation(question, answer):
    url = "https://openai80.p.rapidapi.com/chat/completions"
    payload = {
        "model": "gpt-3.5-turbo",
        "messages": [
            {
                "role": "system",
                "content": "Predict the accuracy of a given answer for a given question on the scale of 0.00 to 1.00. Return the response in the format 'Accuracy: <accuracy>; Explanation: <Explanation>'",
            },
            {
                "role": "user",
                "content": f"Predict the accuracy of the Answer: '{answer}' for the Question: '{question}'",
            },
        ],
    }
    headers = {
        "content-type": "application/json",
        "X-RapidAPI-Key": "646903d4famsha93258814379516p115220jsn3e8642ddead2",
        "X-RapidAPI-Host": "openai80.p.rapidapi.com",
    }

    response = requests.request("POST", url, json=payload, headers=headers)
    data = json.loads(response.text)
    content = data["choices"][0]["message"]["content"]
    accuracy = content.split(";")[0].split(":")[1].strip()
    explanation = content.split(";")[1].split(":")[1].strip()

    return {"accuracy": accuracy, "explanation": explanation}
