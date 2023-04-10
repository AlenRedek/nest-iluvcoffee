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

import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  public constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  public findAll(@Query() paginationQuery) {
    return this.coffeesService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }

  @Post()
  public create(@Body() body) {
    return this.coffeesService.create(body);
  }

  @Patch(':id')
  public update(@Param('id') id: string, @Body() body) {
    return this.coffeesService.update(id, body);
  }

  @Delete(':id')
  public remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
