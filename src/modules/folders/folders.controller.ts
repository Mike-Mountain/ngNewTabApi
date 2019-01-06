import { Controller, Get, Response, HttpStatus, Param, Body, Post, Patch, Delete, Res } from '@nestjs/common';
import { FoldersService } from './folders.service';
import { CreateFolderDto } from './dto/createFolder.dto';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { debug } from 'console';

@ApiUseTags('folders')
@Controller('folders')
export class FoldersController {

  constructor(private readonly foldersService: FoldersService) {
  }

  @Get()
  public async getFolders(@Response() res) {
    const folders = await this.foldersService.findAll();
    return res.status(HttpStatus.OK).json(folders);
  }

  @Get('/type/:folderFor/user/:userId')
  public async getFoldersByType(@Response() res, @Param() param) {
    const folder = param.folderFor;
    const id = param.userId;
    const folders = await this.foldersService.find({
      folderFor: folder,
      userId: id,
    });
    return res.status(HttpStatus.OK).json(folders);
  }

  @Get('/user/:userId')
  public async findFolders(@Response() res, @Param() param) {
    const queryCondition = param.userId;
    const folders = await this.foldersService.find({ userId: queryCondition });
    debug('Returned Folders:', folders);
    return res.status(HttpStatus.OK).json(folders);
  }

  @Get('/id/:id')
  public async getFolderById(@Response() res, @Param() param) {
    const folder = await this.foldersService.findById(param.id);
    return res.status(HttpStatus.OK).json(folder);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'Th record has been successfully saved' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  public async createFolder(@Response() res, @Body() createFolderDto: CreateFolderDto) {
    const folder = await this.foldersService.create(createFolderDto);
    debug(folder);
    return res.status(HttpStatus.OK).json(folder);
  }

  @Patch('/:id')
  public async updateFolder(@Response() res, @Param() param, @Body() body) {
    const folder = await this.foldersService.update(param.id, body);
    return res.status(HttpStatus.OK).json(folder);
  }

  @Delete('/:id')
  public async deleteFolder(@Response() res, @Param() param) {
    const folder = await this.foldersService.delete(param.id);
    return res.status(HttpStatus.OK).json(folder);
  }
}
