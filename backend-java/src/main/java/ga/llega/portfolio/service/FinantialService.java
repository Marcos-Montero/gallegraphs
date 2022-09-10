package ga.llega.portfolio.service;

import lombok.SneakyThrows;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import yahoofinance.Stock;
import yahoofinance.YahooFinance;

@Service
public class FinantialService {

    @SneakyThrows
    @Cacheable(value = "symbols", key = "#symbol")
    public Stock getQuote(String symbol){
        return YahooFinance.get(symbol);
    }
}
