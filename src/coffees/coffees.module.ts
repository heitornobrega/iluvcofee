import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffees.entities';
import { Flavor } from './entities/flavor.entities';
import { Event } from 'src/events/entities/event.entity/event.entity';
import { ConfigModule } from '@nestjs/config';
import coffeesConfig from './config/coffees.config';
// import { COFFEE_BRANDS } from './coffees.constants';
// import { Connection } from 'typeorm';

// to use with useClass:
// class ConfigService{}
// class DevelopmentConfigService{}
// class ProductionConfigSevice{}

// To Use with useFactory:
// @Injectable()
// export class RandomProvider {
//   create() {
//     return ['buddy_brew', 'nescafe'];
//   }
// }

@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    ConfigModule.forFeature(coffeesConfig),
  ],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    // { //This provider it's an example of how to use the custom Providers.
    //   provide: COFFEE_BRANDS,
    //   useFactory: async (connection: Connection): Promise<string[]> => {
    //     const cofeeBrands = await Promise.resolve(['<Coffee />', 'Caboclo']);
    //     console.log('[!] Assync Call');
    //     return cofeeBrands;
    //   },
    //   inject: [Connection],
    // },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
