import { Controller, Get, Response, HttpStatus, Param, Body, Post, Patch, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';

@ApiUseTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Get()
  public async getUsers(@Response() res) {
    const users = await this.usersService.findAll();
    return res.status(HttpStatus.OK).json(users);
  }

  @Get('find')
  public async findUser(@Response() res, @Body() body) {
    const queryCondition = body;
    const user = await this.usersService.findOne(queryCondition);
    return res.status(HttpStatus.OK).json(user);
  }

  @Get('/:_id')
  public async getUser(@Response() res, @Param() param) {
    const user = await this.usersService.findById(param._id);
    return res.status(HttpStatus.OK).json(user);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  public async creatUser(@Response() res, @Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return res.status(HttpStatus.OK).json(user);
  }

  @Patch('/:_id')
  public async updateUser(@Param() param, @Response() res, @Body() body) {
    const user = this.usersService.update(param._id, body);
    return res.status(HttpStatus.OK).json(user);
  }

  @Delete('/:_id')
  public async deleteUser(@Param() param, @Response() res) {
    const user = await this.usersService.delete(param._id);
    return res.status(HttpStatus.OK).json(user);
  }

}
