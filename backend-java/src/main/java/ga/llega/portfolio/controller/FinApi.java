package ga.llega.portfolio.controller;

import ga.llega.portfolio.api.QuoteApi;
import ga.llega.portfolio.service.FinantialService;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import yahoofinance.Stock;


@Controller
public class FinApi implements QuoteApi {

    final FinantialService finService;

    public FinApi(FinantialService finService) {
        this.finService = finService;
    }

    @Override
    public ResponseEntity<Stock> getQuote(String symbol) {
      return ResponseEntity.ok(finService.getQuote(symbol));
    }
}
