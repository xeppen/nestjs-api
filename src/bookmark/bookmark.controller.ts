import {
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
    return [];
  }

  @Post()
  createBookmark(
    @GetUser('id') userId: number,
  ): Bookmark {
    return {} as Bookmark;
  }

  @Get(':id')
  getBookmarkById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
  ): Bookmark {
    return {} as Bookmark;
  }

  @Patch()
  editBookmarkById(
    @GetUser('id') userId: number,
  ): Bookmark {
    return {} as Bookmark;
  }

  @Delete()
  deleteBookmarkById(
    @GetUser('id') userId: number,
  ): Bookmark {
    return {} as Bookmark;
  }
}
