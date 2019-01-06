import { Controller, Get, Response, HttpStatus, Param, Body, Post, Request, Patch, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto} from './dto/createTodo.dto';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { debug } from 'console';

@ApiUseTags('todos')
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {
  }

  @Get()
  public async getTodos(@Response() res) {
    const todos = await this.todosService.findAll();
    return res.status(HttpStatus.OK).json(todos);
  }

  @Get('/folder/:folderName/user/:userId')
  public async getBookmarksByFolder(@Response() res, @Param() param) {
    const folderName = param.folderName;
    const user = param.userId;
    const bookmarks = await this.todosService.find({
      folder: folderName,
      userId: user,
    });
    return res.status(HttpStatus.OK).json(bookmarks);
  }

  @Get('/user/:userId')
  public async findNote(@Response() res, @Param() param) {
    const queryCondition = param.userId;
    const bookmarks = await this.todosService.find({ userId: queryCondition });
    return res.status(HttpStatus.OK).json(bookmarks);
  }

  @Get('/:userId')
  public async findTodo(@Response() res, @Param() param) {
    const queryCondition = param.userId;
    const todos = await this.todosService.find({userId: queryCondition});
    return res.status(HttpStatus.OK).json(todos);
  }

  @Get('/:id')
  public async getTodo(@Response() res, @Param() param){
    const todo = await this.todosService.findById(param.id);
    return res.status(HttpStatus.OK).json(todo);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  public async createTodo(@Response() res, @Body() createTodoDTO: CreateTodoDto) {
    const todo = await this.todosService.create(createTodoDTO);
    return res.status(HttpStatus.OK).json(todo);
  }

  @Patch('/:id')
  public async updateTodo(@Param() param, @Response() res, @Body() body) {
    debug('toUpdate:', param);
    const todo = await this.todosService.update(param.id, body.complete);
    debug('updated TODO: |||| ', todo);
    return res.status(HttpStatus.OK).json(todo);
  }

  @Delete('/:id')
  public async deleteTodo(@Param() param, @Response() res) {
    const todo = await this.todosService.delete(param.id);
    return res.status(HttpStatus.OK).json(todo);
  }
}
