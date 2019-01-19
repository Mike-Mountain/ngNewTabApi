import { Controller, Get, Response, HttpStatus, Param, Body, Post, Request, Patch, Delete } from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';
import { CreateBookmarkDto } from './dto/createBookmark.dto';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { debug } from 'console';

@ApiUseTags('bookmarks')
@Controller('bookmarks')
export class BookmarksController {
  constructor(private readonly bookmarkService: BookmarksService) {
  }

  @Get()
  public async getNotes(@Response() res) {
    const bookmarks = await this.bookmarkService.findAll();
    return res.status(HttpStatus.OK).json(bookmarks);
  }

  @Get('/folder/:folderName/user/:userId')
  public async getBookmarksByFolder(@Response() res, @Param() param) {
    const folderName = param.folderName;
    const user = param.userId;
    const bookmarks = await this.bookmarkService.find({
      folder: folderName,
      userId: user,
    });
    return res.status(HttpStatus.OK).json(bookmarks);
  }

  @Get('/user/:userId')
  public async findNote(@Response() res, @Param() param) {
    const queryCondition = param.userId;
    const bookmarks = await this.bookmarkService.find({ userId: queryCondition });
    return res.status(HttpStatus.OK).json(bookmarks);
  }

  @Get('/bookmark/:id')
  public async getNote(@Response() res, @Param() param) {
    const bookmark = await this.bookmarkService.findById(param.id);
    return res.status(HttpStatus.OK).json(bookmark);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'Th record has been successfully saved' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  public async createNote(@Response() res, @Body() createBookmarkDto: CreateBookmarkDto) {
    const bookmark = await this.bookmarkService.create(createBookmarkDto);
    return res.status(HttpStatus.OK).json(bookmark);
  }

  @Patch('/:id')
  public async updateNote(@Response() res, @Param() param, @Body() body) {
    const bookmark = await this.bookmarkService.update(param.id, body);
    return res.status(HttpStatus.OK).json(bookmark);
  }

  @Delete('/:id')
  public async deleteNote(@Response() res, @Param() param) {
    const bookmark = await this.bookmarkService.delete(param.id);
    return res.status(HttpStatus.OK).json(bookmark);
  }
}
