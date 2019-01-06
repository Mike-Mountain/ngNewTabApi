import { Controller, Get, Response, HttpStatus, Param, Body, Post, Patch, Delete } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/createMessage.dto';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { debug } from 'console';

@ApiUseTags('messages')
@Controller('messages')
export class MessagesController {

  constructor(private readonly messageService: MessagesService) {
  }

  @Get()
  public async getMessages(@Response() res) {
    const messages = await this.messageService.findAll();
    return res.status(HttpStatus.OK).json(messages);
  }

  @Get('/:userId')
  public async findMessage(@Response() res, @Param() param) {
    const queryCondition = param.userId;
    const messages = await this.messageService.find({ userId: queryCondition });
    debug('Returned Notes:', messages);
    return res.status(HttpStatus.OK).json(messages);
  }

  @Get('/:id')
  public async getMessageById(@Response() res, @Param() param) {
    const message = await this.messageService.findById(param.id);
    return res.status(HttpStatus.OK).json(message);
  }

  @Get('/:category')
  public async getMessagesByCategory(@Response() res, @Param() param) {
    const category = param.category;
    const messages = await this.messageService.find({ origin: category });
    debug(messages);
    return res.status(HttpStatus.OK).json(messages);
  }

  @Get('/:type')
  public async getMessagesByType(@Response() res, @Param() param) {
    const type = param.type;
    const messages = await this.messageService.find({ error: type });
    debug(messages);
    return res.status(HttpStatus.OK).json(messages);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'Th record has been successfully saved' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  public async createMessage(@Response() res, @Body() createMessageDto: CreateMessageDto) {
    const message = await this.messageService.create(createMessageDto);
    return res.status(HttpStatus.OK).json(message);
  }

  @Patch('/:id')
  public async updateMessage(@Response() res, @Param() param, @Body() body) {
    const message = await this.messageService.update(param.id, body);
    return res.status(HttpStatus.OK).json(message);
  }

  @Delete('/:id')
  public async deleteMessage(@Response() res, @Param() param) {
    const message = await this.messageService.delete(param.id);
    return res.status(HttpStatus.OK).json(message);
  }
}
