module.exports = {
  '*.{ts,tsx}': [
    () => 'tsc --skipLibCheck --noEmit',
    'eslint . --ext .js,.jsx,.ts,.tsx --fix',
  ],
  '*.{ts,js,css,md}': 'prettier --write',
}
