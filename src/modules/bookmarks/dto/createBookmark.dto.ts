import { ApiModelProperty } from '@nestjs/swagger';

export class CreateBookmarkDto {
  @ApiModelProperty()
  readonly title: string;

  @ApiModelProperty()
  readonly description: string;

  @ApiModelProperty()
  readonly url: string;

  @ApiModelProperty()
  readonly faviconUrl: string;
}