import { Injectable } from '@nestjs/common';
import { Bookmark } from '@prisma/client';
import {
  CreateBookmarkDto,
  EditBookmarkDto,
} from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}
  getBookmarks(userId: number): Bookmark[] {
    return [];
  }

  createBookmark(
    userId: number,
    dto: CreateBookmarkDto,
  ): Bookmark {
    return {} as Bookmark;
  }

  getBookmarkById(
    userId: number,
    bookmarkId: number,
  ): Bookmark {
    return {} as Bookmark;
  }

  editBookmarkById(
    userId: number,
    bookmarkId: number,
    dto: EditBookmarkDto,
  ): Bookmark {
    return {} as Bookmark;
  }

  deleteBookmarkById(
    userId: number,
    bookmarkId: number,
  ): Bookmark {
    return {} as Bookmark;
  }
}
