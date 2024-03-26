import { Injectable } from '@nestjs/common';

@Injectable()
export class BookmarkService {
  getBookmarks(): Bookmark[] {
    return [];
  }

  createBookmark(): Bookmark {
    return {} as Bookmark;
  }

  getBookmarkById(): Bookmark {
    return {} as Bookmark;
  }

  editBookmarkById(): Bookmark {
    return {} as Bookmark;
  }

  deleteBookmarkById(): Bookmark {
    return {} as Bookmark;
  }
}
