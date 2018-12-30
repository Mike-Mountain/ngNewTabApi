import { ApiModelProperty } from '@nestjs/swagger';

export class CreateNoteDto {
  @ApiModelProperty()
  readonly sid: string;

  @ApiModelProperty()
  readonly title: string;

  @ApiModelProperty()
  readonly body: string;

  @ApiModelProperty()
  readonly created: Date;

  @ApiModelProperty()
  readonly modified: Date;
}