import json, os, requests

def handler (event, context):

  url = os.environ['URL']
  headers = json.loads(os.environ['headers'])

  params = {
    'q': event['search_string']
  }

  response = requests.get(url, headers=headers, params=params)

  return response.json()['Response']