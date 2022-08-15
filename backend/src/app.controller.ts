import {CacheInterceptor, CacheTTL, Controller, Get, Query, UseInterceptors} from '@nestjs/common';
import {AppService} from './app.service';
import {Range} from "./model";

@Controller()
@UseInterceptors(CacheInterceptor)
@CacheTTL(600)
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get('quote')
    getQuote(@Query('symbol') symbol): string {
        return this.appService.getQuote(symbol);
    }

    @Get('historical')
    getHistorical(
        @Query('symbol') symbol: string,
        @Query('period') period: string,
        @Query('range') range: Range,
    ): string {
        return this.appService.getHistorical(symbol, period,range);
    }
}
