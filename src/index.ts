#!/usr/bin/env node

import * as fs from 'fs-extra';

fs.emptyDirSync(process.argv[2]);
