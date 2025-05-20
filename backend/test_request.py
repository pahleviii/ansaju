import requests

url = "http://127.0.0.1:5000/predict"
data = [3, 4, 2, 5, 3, 2, 1, 2, 4, 3, 3, 2]

response = requests.post(url, json=data)
print("Status:", response.status_code)
print("Result:", response.json())