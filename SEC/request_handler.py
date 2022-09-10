from operator import ge
import requests
import pandas as pd

#SEC API takes CIK as the request parameterm, but e want to use tickers
#Thus we use the CIK-ticker mapper provided by SEC
tickers_cik = requests.get("https://www.sec.gov/files/company_tickers.json")
tickers_cik = pd.json_normalize(pd.json_normalize(tickers_cik.json(), max_level=0).values[0])
#we need to format the cik numbers to be 10 digits long with appending zeroes in front of the numbers returned by the mapper
tickers_cik["cik_str"] = tickers_cik["cik_str"].astype(str).str.zfill(10)


def get_financials(symbol):
    cik = tickers_cik[tickers_cik['ticker']== symbol]['cik_str'].values[0]
    print(cik)
    headers = {'User-Agent': "Thunder Client (https://www.thunderclient.com)"}
    query_string = "https://data.sec.gov/api/xbrl/companyfacts/CIK{cik}.json".format(
        cik = cik
    )
    all_XBRL_disclosures = requests.get(query_string, headers=headers).json()
    return all_XBRL_disclosures 








