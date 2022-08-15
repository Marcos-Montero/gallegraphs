import {CacheModule, Module} from '@nestjs/common';
import {FinDataController} from './finData.controller';
import {FinantialsService} from './finantials.service';

@Module({
    imports: [CacheModule.register()],
    controllers: [FinDataController],
    providers: [FinantialsService],
})
export class GalleFin {
}
