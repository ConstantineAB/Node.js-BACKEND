import { User } from './users.model';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }
    
    @ApiOperation({summary: 'Получить всех пользователей'})
    @ApiResponse({status: 200, type: User})
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }
}