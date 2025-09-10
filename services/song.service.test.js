import { vi, describe, it, expect } from 'vitest';
import { SongService } from './song.service.js';
import db from '../config/db.js';

vi.mock('../config/db.js', () => ({
  default: { query: vi.fn() },
}));

describe('SongService Test', () => {
  it('getAll returns all rows', async () => {
    const rows = [{ id: 1, title: 'A', artist: 'B' }];
    // mysql2/promise shape: [rows, fields]
    db.query.mockResolvedValueOnce([rows, undefined]);

    const result = await SongService.getAll();

    expect(db.query).toHaveBeenCalledWith(
      'SELECT id, title, artist FROM songs',
    );
    expect(result).toEqual(rows);
  });
});
