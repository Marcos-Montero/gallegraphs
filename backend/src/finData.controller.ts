import {CacheInterceptor, CacheTTL, Controller, Get, Query, UseInterceptors} from '@nestjs/common';
import {FinantialsService} from './finantials.service';
import {Range} from "./model";

@Controller()
//@UseInterceptors(CacheInterceptor)
@CacheTTL(6000)
export class FinDataController {
    constructor(private readonly appService: FinantialsService) {
    }

    @Get('quote')
    getQuote(@Query('symbol') symbol): any {
        return this.appService.getQuote(symbol);
    }

    @Get('historical')
    getHistorical(
        @Query('symbol') symbol: string,
        @Query('period') period?: string,
        @Query('range') range?: Range,
    ): any {
        return this.appService.getHistorical(symbol, period,range);
    }

    @Get('sharesOutstanding')
    async getSharesOutstanding(@Query('symbol') symbol: string): Promise<any> {
        return await this.appService.getSharesOutstanding(symbol);
    }
}
