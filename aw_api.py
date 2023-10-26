# # https://ambientweather.docs.apiary.io/#reference/ambient-realtime-api

# import requests
# import textwrap

# r = requests.get('https://api.ambientweather.net/v1/devices?' \
# 'applicationKey=my64charAppKey&' \
# 'apiKey=my64charAPIKey')
# print 'request made'
    
# r.text
# data = textwrap.fill(r.text, 70)
# print data

# with open('wsdata.txt', 'w') as f:
#     f.write(data)
# print 'raw data saved'