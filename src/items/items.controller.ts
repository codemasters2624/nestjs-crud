import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDTO } from './dto/create-item-dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Delete(':id')
  deleteOne(@Param('id') id): Promise<Item> {
    return this.itemsService.delete(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDTO): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  @Put(':id')
  update(@Body() updateItemDTO: CreateItemDTO, @Param('id') id): Promise<Item> {
    return this.itemsService.update(id, updateItemDTO);
  }
}
