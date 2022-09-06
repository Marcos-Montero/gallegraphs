# gallegraphs

Time Scopes : 1month (30 days), 6months, 1 year, 5 years, maximum available

##yahoo data:

1) price (time series graph)
2) current financial and statistical data
"summaryDetail": {
    "marketCap"
    "trailingPE"
    "forwardPE"
},
"defaultKeyStatistics": {
    "sharesOutstanding"
    "sharesShort"
    "sharesPercentSharesOut"
    "heldPercentInsiders"
    "shortRatio"
    "shortPercentOfFloat"
    "bookValue"
    "priceToBook"
    "netIncomeToCommon"
    "trailingEps"
    "forwardEps"
    "pegRatio"
    "lastDividendValue"
},
"financialData": {
    "totalCash"
    "totalCashPerShare"
    "ebitda"
    "totalDebt"
    "quickRatio"
    "currentRatio"
    "totalRevenue"
    "debtToEquity"
    "revenuePerShare"
    "returnOnAssets"
    "returnOnEquity"
    "grossProfits"
    "freeCashflow"
    "operatingCashflow"
    "earningsGrowth"
    "revenueGrowth"
    "grossMargins"
    "ebitdaMargins"
    "operatingMargins"
    "profitMargins"
}


##EDGAR (SEC): 
Financial report filling data can be accessed through this API:
https://www.sec.gov/edgar/sec-api-documentation

Specifically we are interested in calling financial statements as a json
https://data.sec.gov/api/xbrl/companyfacts/CIK##########.json

Where the ########## is the entity’s 10-digit Central Index Key (CIK), including leading zeros.
"Apple Inc." = https://data.sec.gov/api/xbrl/companyfacts/CIK0000320193.json
"BERKSHIRE HATHAWAY INC" = https://data.sec.gov/api/xbrl/companyfacts/CIK0001067983.json

1) revenue
"facts": {
    "us-gaap": {"Revenues": {
                        "units": {
                                "USD": [
                                        {
                                            "end": "2007-12-31",
                                            "val": 118245000000
                                        }
                                        ]
                                    }
                }           }  
            }

##Testing
Quote request: http://localhost:3000/quote?symbol=AAPL
Historical request: http://localhost:3000/historical?symbol=AAPL


##Starting docker-compose
$ docker-compose up --build -d

##Vite dockerization speciffics
https://stdworkflow.com/1499/vite-network-use-host-to-expose