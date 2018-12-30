import { Controller, Get, Response, HttpStatus, Param, Body, Post, Request, Patch, Delete } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/createNote.dto';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { debug } from 'console';

@ApiUseTags('notes')
@Controller('notes')
export class NotesController {

  constructor(private readonly notesService: NotesService) {
  }

  @Get()
  public async getNotes(@Response() res) {
    const notes = await this.notesService.findAll();
    return res.status(HttpStatus.OK).json(notes);
  }

  @Get('/:userId')
  public async findNote(@Response() res, @Param() param) {
    const queryCondition = param.userId;
    const notes = await this.notesService.find({userId: queryCondition});
    debug('Returned:', notes);
    return res.status(HttpStatus.OK).json(notes);
  }

  @Get('/:id')
  public async getNote(@Response() res, @Param() param) {
    const note = await this.notesService.findById(param.id);
    return res.status(HttpStatus.OK).json(note);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'Th record has been successfully saved' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  public async createNote(@Response() res, @Body() createNoteDto: CreateNoteDto) {
    const note = await this.notesService.create(createNoteDto);
    return res.status(HttpStatus.OK).json(note);
  }

  @Patch('/:id')
  public async updateNote(@Response() res, @Param() param, @Body() body) {
    const note = await this.notesService.update(param.id, body);
    return res.status(HttpStatus.OK).json(note);
  }

  @Delete('/:id')
  public async deleteNote(@Response() res, @Param() param) {
    const note = await this.notesService.delete(param.id);
    return res.status(HttpStatus.OK).json(note);
  }
}
