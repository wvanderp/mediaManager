import { describe, it } from 'mocha';
import { expect } from 'chai';
import path from 'path';

import { scanDirectory } from '../src/commands/scan';
import fs from 'fs';

describe('directory scan', function () {
    // todo: does it work with relative location?

    it('should return a list with only image and video files', function (done) {
        const location = path.resolve(__dirname, './folder/');
        const expected = JSON.parse(fs.readFileSync(path.resolve(__dirname, './records/directoryScan.json')).toString());

        expect(scanDirectory(location))
            .to
            .deep
            .equal(expected);
        done();
    })
        .timeout(100000);
        
});
