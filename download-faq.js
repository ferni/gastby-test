/*
Downloads faq markdown into ./markdown-files
 */
const execSync = require('child_process').execSync;
execSync('rm -r ./markdown-files');
const ghdownload = require('github-download');
const repoUrl = 'https://github.com/makerdao/faq-test.git';
console.log(`Downloading markdown files from ${repoUrl} ...`);
ghdownload(repoUrl, './markdown-files')
  .on('dir', function(dir) {
    console.log(dir)
  })
  .on('file', function(file) {
    console.log(file)
  })
  .on('zip', function(zipUrl) { //only emitted if Github API limit is reached and the zip file is downloaded
    console.log(zipUrl)
  })
  .on('error', function(err) {
    console.error(err)
  })
  .on('end', function() {
    console.log('Finished downloading markdown files.')
  })