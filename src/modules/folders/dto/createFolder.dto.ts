import { ApiModelProperty } from '@nestjs/swagger';

export class CreateFolderDto {
  @ApiModelProperty()
  readonly userId: string;

  @ApiModelProperty()
  readonly folderFor: string;

  @ApiModelProperty()
  readonly name: string;

  @ApiModelProperty()
  readonly itemIds: Array<string>;

  @ApiModelProperty()
  readonly description: string;

  @ApiModelProperty()
  readonly created: Date;

  @ApiModelProperty()
  readonly iconUrl: string;
}