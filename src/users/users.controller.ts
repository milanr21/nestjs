import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll(): string {
    return 'This will return all the users';
  }

  @Get('milan')
  findMilan(): string {
    return 'this is milan';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a user with id ${id}`;
  }
}
