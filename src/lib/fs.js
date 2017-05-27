import fs from 'fs'
import jsonfile from 'jsonfile'

import { log } from '../logger'

export default class FileSystem {
    getFile(file) {
        return new Promise((resolve, reject) => {
            fs.readFile(file, (err, data) => {
                if (err) return reject(err);
                resolve(data);
            });
        })
    }
    saveFile(file, data) {
        return new Promise((resolve, reject) => {
            fs.writeFile(file, data, (err) => {
                if (err) return reject(err);
                resolve();
            });
        })
    }
    appendFile(file, data) {
        return new Promise((resolve, reject) => {
            fs.appendFile(file, data, (err) => {
                if (err) return reject(err);
                resolve();
            });
        })
    }

    readJson(file) {
        return new Promise((resolve, reject) => {
            jsonfile.readFile(file, (err, data) => {
                if (err) return reject(err);
                resolve(data);
            });
        })
    }
    saveJson(file, data) {
        return new Promise((resolve, reject) => {
            jsonfile.writeFile(file, data, (err) => {
                if (err) return reject(err);
                resolve();
            });
        })
    }

    isFileExistsSync(path, isMakeIfNot = false, isLogErrIfNot = false, data = '') {
        if (!fs.existsSync(path)) {
            if (isLogErrIfNot) {
                log(`Директория или файл с путем '${path}' не существует. ${isMakeIfNot ? 'Создаем' : 'Не создаем'}`, logLevel.ERROR)
            }
            if (!isMakeIfNot) {
                return false
            }
            fs.writeFileSync(path, data)
        }
        return true
    }

    isDirExistsSync(path, isMakeIfNot = false, isLogErrIfNot = false) {
        if (!fs.existsSync(path)) {
            if (isLogErrIfNot) {
                log(`Директория или файл с путем '${path}' не существует. ${isMakeIfNot ? 'Создаем' : 'Не создаем'}`, logLevel.ERROR)
            }
            if (!isMakeIfNot) {
                return false
            }
            fs.mkdirSync(path)
        }
        return true
    }
}