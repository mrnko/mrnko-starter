// ----------------------------------------------------------------------------------------------
//
// Простой и удобный сброс проекта от демо контента
//
// Вызывается командой в терминале: `npm run clear`
//
// Перед стартом нового проекта, просто вызовите этот скрипт командой `npm run clear`
// и скрипт сделает всю работу за вас, а также выведет в лог все произведенные  изменения.
//
// Если вам нужно добавить функцию изменения в проекте, просто вставьте ее перед объявлением
// функции `clear` и поместите в функцию `clear` вызов вашей функции
//
// Copyright (c) 2024 Oleksii Myronenko (https://mrnko.com)
//
// ----------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------
// Подключение зависимостей
// ----------------------------------------------------------------------------------------------
import fs from 'fs-extra';
import inquirer from 'inquirer';
import path from 'path';

// ----------------------------------------------------------------------------------------------
// Переменные среды
// ----------------------------------------------------------------------------------------------
const defaultLanguageCode = 'ru';

const successText = 'Выполнено: ';
const errorText = 'Произошла ошибка: ';
const warningText = 'Предупреждение: ';

// ----------------------------------------------------------------------------------------------
// Объявление о запуске скрипта
// ----------------------------------------------------------------------------------------------
async function scriptStartMessage() {
  console.warn('Запуск процесса очистки проекта...');
}

// ----------------------------------------------------------------------------------------------
// Обновление title и description проекта
// ----------------------------------------------------------------------------------------------
async function updateViteConfig() {
  const viteConfigPath = path.join(process.cwd(), 'vite.config.js');

  try {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'projectTitle',
        message: 'Введите название проекта (title):',
      },
      {
        type: 'input',
        name: 'projectDescription',
        message: 'Введите описание проекта (description):',
      }
    ]);

    const { projectTitle, projectDescription } = answers;

    const viteConfigData = await fs.readFile(viteConfigPath, 'utf8');

    const updatedViteConfigData = viteConfigData
      .replace(/title: ['"`](.*?)['"`]/, `title: '${projectTitle}'`)
      .replace(/description: ['"`](.*?)['"`]/, `description: '${projectDescription}'`);

    await fs.writeFile(viteConfigPath, updatedViteConfigData, 'utf8');
    console.log('\x1b[32m%s\x1b[0m', successText + `название проекта в файле vite.config.js было изменено на "${projectTitle}".`);
    console.log('\x1b[32m%s\x1b[0m', successText + `описание проекта в файле vite.config.js было изменено на "${projectDescription}".`);
  } catch (err) {
    console.error(errorText, err);
  }
}

// ----------------------------------------------------------------------------------------------
// Смена языка сайта
// ----------------------------------------------------------------------------------------------
async function changeLanguage() {
  try {
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'siteLanguageCode',
        message: 'Выберите язык сайта (по-умолчанию: ' + defaultLanguageCode + ') или введите свой вариант:',
        choices: [
          'ab', 'aa', 'af', 'ak', 'sq', 'am', 'ar', 'an', 'hy', 'as', 'av', 'ae', 'ay', 'az', 'bm', 'ba',
          'eu', 'be', 'bn', 'bh', 'bi', 'bs', 'br', 'bg', 'my', 'ca', 'ch', 'ce', 'ny', 'zh', 'cv', 'kw',
          'co', 'cr', 'hr', 'cs', 'da', 'dv', 'nl', 'dz', 'en', 'eo', 'et', 'ee', 'fo', 'fj', 'fi', 'fr',
          'ff', 'gl', 'ka', 'de', 'el', 'gn', 'gu', 'ht', 'ha', 'he', 'hz', 'hi', 'ho', 'hu', 'ia', 'id',
          'ie', 'ga', 'ig', 'ik', 'io', 'is', 'it', 'iu', 'ja', 'jv', 'kl', 'kn', 'kr', 'ks', 'kk', 'km',
          'ki', 'rw', 'ky', 'kv', 'kg', 'ko', 'ku', 'kj', 'la', 'lb', 'lg', 'li', 'ln', 'lo', 'lt', 'lu',
          'lv', 'gv', 'mk', 'mg', 'ms', 'ml', 'mt', 'mi', 'mr', 'mh', 'mn', 'na', 'nv', 'nd', 'ne', 'ng',
          'nb', 'nn', 'no', 'ii', 'nr', 'oc', 'oj', 'cu', 'om', 'or', 'os', 'pa', 'pi', 'fa', 'pl', 'ps',
          'pt', 'qu', 'rm', 'rn', 'ro', 'ru', 'sa', 'sc', 'sd', 'se', 'sm', 'sg', 'sr', 'gd', 'sn', 'si',
          'sk', 'sl', 'so', 'st', 'es', 'su', 'sw', 'ss', 'sv', 'ta', 'te', 'tg', 'th', 'ti', 'bo', 'tk',
          'tl', 'tn', 'to', 'tr', 'ts', 'tt', 'tw', 'ty', 'ug', 'uk', 'ur', 'uz', 've', 'vi', 'vo', 'wa',
          'cy', 'wo', 'fy', 'xh', 'yi', 'yo', 'za', 'zu',
          { name: 'Ввести другой язык', value: 'custom' }
        ],
        default: defaultLanguageCode,
      },
      {
        type: 'input',
        name: 'customLanguageCode',
        message: 'Введите свой вариант языка:',
        when: answers => answers.siteLanguageCode === 'custom',
      }
    ]);

    const indexFilePath = path.join(process.cwd(), 'index.html');

    try {
      let indexFileData = await fs.readFile(indexFilePath, 'utf8');

      indexFileData = indexFileData.replace(/<html[^>]*>/, `<html lang="${answers.siteLanguageCode}">`);

      await fs.writeFile(indexFilePath, indexFileData, 'utf8');
      console.log('\x1b[32m%s\x1b[0m', successText + `атрибут "lang" у тега "html" в файле "index.html" был изменен на "${answers.siteLanguageCode}".`);
    } catch (err) {
      console.error(errorText, err);
    }
  } catch (err) {
    console.error(errorText, err);
  }
}

// ----------------------------------------------------------------------------------------------
// Очистка директории `public/fonts`
// ----------------------------------------------------------------------------------------------
async function clearFontsDirectory() {
  const fontsDirPath = path.join(process.cwd(), 'public', 'fonts');

  try {
    const files = await fs.readdir(fontsDirPath);

    for (const file of files) {
      await fs.remove(path.join(fontsDirPath, file));
    }
    console.log('\x1b[32m%s\x1b[0m', successText + 'все файлы в папке "public/fonts" были удалены.');
  } catch (err) {
    console.error(errorText, err);
  }
}

// ----------------------------------------------------------------------------------------------
// Очистка директории `public/images/favicons`
// ----------------------------------------------------------------------------------------------
async function clearFaviconsDirectory() {
  const faviconsDirPath = path.join(process.cwd(), 'public', 'images', 'favicons');

  try {
    const files = await fs.readdir(faviconsDirPath);

    for (const file of files) {
      await fs.remove(path.join(faviconsDirPath, file));
    }
    console.log('\x1b[32m%s\x1b[0m', successText + 'все файлы в папке "public/images/favicons" были удалены.');
  } catch (err) {
    console.error(errorText, err);
  }
}

// ----------------------------------------------------------------------------------------------
// Удаление логотипа из директории `public/images`
// ----------------------------------------------------------------------------------------------
async function removeLogoFile() {
  const logoFilePath = 'public/images/logo.svg';

  try {
    await fs.remove(logoFilePath);
    console.log('\x1b[32m%s\x1b[0m', successText + `файл "${logoFilePath}" был успешно удален.`);
  } catch (err) {
    console.error(errorText, err);
  }
}

// ----------------------------------------------------------------------------------------------
// Очистка демо файлов шаблона из директории `public/partials`
// ----------------------------------------------------------------------------------------------
async function removeSpecificFilesFromPartials() {
  const partialsDirPath = 'public/partials';

  try {
    const files = await fs.readdir(partialsDirPath);

    const filesToDelete = ['buttons.html', 'forms.html', 'hero.html', 'modal.html', 'slider.html', 'table.html'];

    for (const file of filesToDelete) {
      const filePath = path.join(partialsDirPath, file);

      if (files.includes(file)) {
        await fs.remove(filePath);
        console.log('\x1b[32m%s\x1b[0m', successText + `файл "${filePath}" был успешно удален.`);
      } else {
        console.warn(warningText + `файл "${filePath}" не найден.`);
      }
    }
  } catch (err) {
    console.error(errorText, err);
  }
}

// ----------------------------------------------------------------------------------------------
// Очистка всего содержимого из файла `public/partials/footer.html`
// ----------------------------------------------------------------------------------------------
async function clearFooterFile() {
  const fiiterFilePath = 'public/partials/footer.html';

  try {
    await fs.writeFile(fiiterFilePath, '');

    console.log('\x1b[32m%s\x1b[0m', successText + `файл "${fiiterFilePath}" был успешно очищен.`);
  } catch (err) {
    console.error(errorText, err);
  }
}

// ----------------------------------------------------------------------------------------------
// Очистка демо файлов шаблона из директории `src/scss/layout`
// ----------------------------------------------------------------------------------------------
async function removeSpecificFilesFromSassLayout() {
  const sassLayoutDirPath = 'src/scss/layout';

  try {
    const files = await fs.readdir(sassLayoutDirPath);

    const filesToDelete = ['_demo.scss', '_hero.scss'];

    for (const file of filesToDelete) {
      const filePath = path.join(sassLayoutDirPath, file);

      if (files.includes(file)) {
        await fs.remove(filePath);
        console.log('\x1b[32m%s\x1b[0m', successText + `файл "${filePath}" был успешно удален.`);
      } else {
        console.warn(warningText + `файл "${filePath}" не найден.`);
      }
    }
  } catch (err) {
    console.error(errorText, err);
  }
}

// ----------------------------------------------------------------------------------------------
// Обновление файла `src/scss/abstracts/_layout.scss
// ----------------------------------------------------------------------------------------------
async function updateLayoutScssFile() {
  const layoutScssFilePath = path.join(process.cwd(), 'src', 'scss', 'abstracts', '_layout.scss');

  try {
    const layoutScssFileData = await fs.readFile(layoutScssFilePath, 'utf8');

    const updatedLayoutScssFileData = layoutScssFileData
      .replace("@import '../layout/demo';", '')
      .replace("@import '../layout/hero';", '');

    await fs.writeFile(layoutScssFilePath, updatedLayoutScssFileData, 'utf8');
    console.log('\x1b[32m%s\x1b[0m', successText + `файл "src/scss/abstracts/_layout.scss" был успешно обновлен.`);
  } catch (err) {
    console.error(errorText, err);
  }
}

// ----------------------------------------------------------------------------------------------
// Обновление файла `index.html`
// ----------------------------------------------------------------------------------------------
async function updateIndexFile() {
  const indexFilePath = path.join(process.cwd(), 'index.html');

  try {
    const indexFileData = await fs.readFile(indexFilePath, 'utf8');

    const updatedIndexFileData = indexFileData
      .replace(/{{>\s*hero\s*}}\s*\n?/g, '')
      .replace(/{{>\s*buttons\s*}}\s*\n?/g, '')
      .replace(/{{>\s*forms\s*}}\s*\n?/g, '')
      .replace(/{{>\s*table\s*}}\s*\n?/g, '')
      .replace(/{{>\s*slider\s*}}\s*\n?/g, '')
      .replace(/{{>\s*modal\s*}}\s*\n?/g, '');

    await fs.writeFile(indexFilePath, updatedIndexFileData, 'utf8');
    console.log('\x1b[32m%s\x1b[0m', successText + `файл "index.html" был успешно обновлен.`);
  } catch (err) {
    console.error(errorText, err);
  }
}

// ----------------------------------------------------------------------------------------------
// Собираем все функции в одну
// ----------------------------------------------------------------------------------------------
async function clear() {
  await scriptStartMessage();
  await updateViteConfig();
  await changeLanguage();
  await clearFontsDirectory();
  await clearFaviconsDirectory();
  await removeLogoFile();
  await removeSpecificFilesFromPartials();
  await clearFooterFile();
  await removeSpecificFilesFromSassLayout();
  await updateLayoutScssFile();
  await updateIndexFile();
}

// ----------------------------------------------------------------------------------------------
// Запускаем процесс очистки проекта
// ----------------------------------------------------------------------------------------------
clear();