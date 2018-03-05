import json, os, pg8000

def handler (event, context):

  # open database connection
  pg = pg8000.connect(
    host=os.environ['db_host'],
    port=5432,
    database=os.environ['db_name'],
    user=os.environ['db_user'],
    password=os.environ['db_user_password']
  )

  sql = 'SELECT groups.fn_get_iron_crew()'
  pg_cursor = pg.cursor()
  pg_cursor.execute(sql)
  results = pg_cursor.fetchall()

  # close database connection
  pg.close()

  return json.loads(results[0][0])