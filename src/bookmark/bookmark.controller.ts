import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Bookmark } from '@prisma/client';
import { JwtGuard } from '../auth/guard';
import { BookmarkService } from './bookmark.service';
import { GetUser } from 'src/auth/decorator';
import {
  CreateBookmarkDto,
  EditBookmarkDto,
} from './dto';

@UseGuards(JwtGuard)
@Controller('bookmarks')
export class BookmarkController {
  constructor(
    private bookmarkService: BookmarkService,
  ) {}
  @Get()
  getBookmarks(
    @GetUser('id') userId: number,
  ): Bookmark[] {
    return this.bookmarkService.getBookmarks(
      userId,
    );
  }

  @Post()
  createBookmark(
    @GetUser('id') userId: number,
    @Body() dto: CreateBookmarkDto,
  ): Bookmark {
    return this.bookmarkService.createBookmark(
      userId,
      dto,
    );
  }

  @Get(':id')
  getBookmarkById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
  ): Bookmark {
    return this.bookmarkService.getBookmarkById(
      userId,
      bookmarkId,
    );
  }

  @Patch(':id')
  editBookmarkById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
    @Body() dto: EditBookmarkDto,
  ): Bookmark {
    return this.bookmarkService.editBookmarkById(
      userId,
      bookmarkId,
      dto,
    );
  }

  @Delete(':id')
  deleteBookmarkById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
  ): Bookmark {
    return this.bookmarkService.deleteBookmarkById(
      userId,
      bookmarkId,
    );
  }
}
