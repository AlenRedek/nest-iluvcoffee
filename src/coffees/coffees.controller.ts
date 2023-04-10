import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  public constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  public findAll() {
    return this.coffeesService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }

  @Post()
  public create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }

  @Patch(':id')
  public update(
    @Param('id') id: string,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ) {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  public remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
