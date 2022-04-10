const { expect } = require('chai');
const rewire = require('rewire');
const path = require('path');

describe('directory scan', function () {
    // todo: does it work with relative location?

    it('should return a list with only image and video files', function (done) {
        const location = path.resolve(__dirname, './folder/');
        const scanDir = rewire('../src/commands/scan')
            .__get__('scanDir');

        const expected = [
            {
                _fileName: 'Facebook_Angry_React.png',
                _filePath: `${__dirname}\\folder`,
                _hash: '3680634a89f6b005ce676bd45c0a142f06ea22db'
            },
            {
                _fileName: 'Facebook_default_female_avatar.gif',
                _filePath: `${__dirname}\\folder`,
                _hash: '9ea9360c20cc4a9797e046767aeb809ad9e8b1c7'
            },
            {
                _fileName: 'F_icon.svg',
                _filePath: `${__dirname}\\folder`,
                _hash: '42e6efdcea5ce5a1f2ed2922d535de0231e004ec'
            },
            {
                _fileName: 'Max_Verstappen_2016_Malaysia_1.jpg',
                _filePath: `${__dirname}\\folder`,
                _hash: 'ca51e34192d2a69fe3dc02c3bc6c2d786b49dfb6'
            },
            {
                _fileName: 'Nidhogg_video_game_trailer.webm',
                _filePath: `${__dirname}\\folder`,
                _hash: 'a050dbf4d8f626320ec02749c2358aae1c3702c4'
            },
            {
                _fileName: 'Nidhogg_video_game_trailer.webm.480p.ogv',
                _filePath: `${__dirname}\\folder`,
                _hash: '135bf11580dac8fb73a9281323ff3a870c39f3dd'
            },
            {
                _fileName: 'PANO_20170712_144704.jpg',
                _filePath: `${__dirname}\\folder`,
                _hash: 'e9db37d18a6ac4cb53c1e94f2b28bd93db859429'
            }
        ];

        expect(scanDir(location))
            .to
            .deep
            .equal(expected);
        done();
    })
        .timeout(100000);
});
