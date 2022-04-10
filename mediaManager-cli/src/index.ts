import { program } from 'commander';
import { description, version } from '../package.json';

import scan from './commands/scan';
import upload from './commands/upload';

program.version(version)
    .description(description);

program.command('scan <directory>')
    .description('scan a directory and add it to your library')
    .action((directory) => {
        scan(directory);
    });

program.command('upload <uploadFile>')
    .description('uploads a the files from a upload file')
    .action(async (uploadFile) => {
        try {
            await upload(uploadFile);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error.stack || error);
        }
    });

program.parse(process.argv);
