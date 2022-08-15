# gallegraphs

Time Scopes : 1month (30 days), 6months, 1 year, 5 years, maximum available

##yahoo data:

1) price (time series graph)
2) current financial and statistical data


##EDGAR (SEC): 
Financial report filling data can be accessed through this API:
https://www.sec.gov/edgar/sec-api-documentation

Specifically we are interested in calling financial statements as a json
https://data.sec.gov/api/xbrl/companyfacts/CIK##########.json

Where the ########## is the entity’s 10-digit Central Index Key (CIK), including leading zeros.
"Apple Inc." = https://data.sec.gov/api/xbrl/companyfacts/CIK0000320193.json
"BERKSHIRE HATHAWAY INC" = https://data.sec.gov/api/xbrl/companyfacts/CIK0001067983.json

1) revenue
2) earnings per share
3)
