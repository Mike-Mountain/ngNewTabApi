import { ApiModelProperty } from '@nestjs/swagger';

export class CreateBookmarkDto {
  @ApiModelProperty()
  readonly userId: string;

  @ApiModelProperty()
  readonly title: string;

  @ApiModelProperty()
  readonly description: string;

  @ApiModelProperty()
  readonly url: string;

  @ApiModelProperty()
  readonly faviconUrl: string;

  @ApiModelProperty()
  readonly folder: string;
}