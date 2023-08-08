import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll() {
    return this.coffeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const coffee = this.coffeesService.findOne(id);
    if (!coffee) {
      throw new NotFoundException(`Coffee ${id} not found`);
    }
    return coffee;
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    this.coffeesService.create(createCoffeeDto);
    return createCoffeeDto;
  }

  @Patch(':id')
  update(@Param('id') updateCoffeDto: UpdateCoffeeDto) {
    this.coffeesService.update(updateCoffeDto);
    return updateCoffeDto;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
