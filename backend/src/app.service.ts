import {Injectable} from '@nestjs/common';
import * as yahooFinance from 'yahoo-finance';
import {Range} from "./model";

@Injectable()
export class AppService {
    constructor() {
    }

    getQuote(symbol: string): any {
        return yahooFinance.quote(
            {
                symbol: symbol,
                modules: [
                    'price',
                    'summaryDetail',
                    'financialData',
                    'earnings',
                    'defaultKeyStatistics',
                ], // see the docs for the full list
            },
            function (err, quotes) {
                console.log(quotes);
            },
        );
    }

    getHistorical(symbol: string, period?: string, range?: Range): any {
        return yahooFinance.historical(
            {
                symbol: symbol,
                period: period || 'd',
                from: this.findTimeRage(Range.ALL).toISOString().split('T')[0],
                to: new Date().toISOString().split('T')[0]
            },
            function (err, quotes) {
                // console.log(quotes);
            },
        );
    }

    findTimeRage(range: Range): Date {
        const today = new Date()
        let daysToSubstract;

        switch (range) {
            case Range["1D"]:
                daysToSubstract = 1;
                break;
            case Range["1W"]:
                daysToSubstract = 7;
                break;
            case Range["1M"]:
                daysToSubstract = 31;
                break;
            case Range["6M"]:
                daysToSubstract = 186;
                break;
            case Range.YTD:
                daysToSubstract = 200;
                break;
            case Range["1Y"]:
                daysToSubstract = 365;
                break;
            case Range["5Y"]:
                daysToSubstract = 365 * 5;
                break;
            case Range.ALL:
                daysToSubstract = 8000;
                break;
        }
        return new Date(today.setDate(today.getDate() - daysToSubstract));
    }
}
