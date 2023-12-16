/* eslint-disable */

import fs from 'fs';
import path from 'path';

module.exports = async function () {
    const testDbPath = path.resolve(__dirname, '../../prisma/test.db');
    const testDbJournalPath = path.resolve(__dirname, '../../prisma/test.db-journal');

    if (fs.existsSync(testDbPath)) {
        fs.unlinkSync(testDbPath);
    }

    if (fs.existsSync(testDbJournalPath)) {
        fs.unlinkSync(testDbJournalPath);
    }

};
