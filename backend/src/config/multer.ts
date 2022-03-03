import multer, { FileFilterCallback } from "multer";
import path from "path";
import { Request } from "express";

type Callback = (error: Error | null, destination: string) => void;

export const multerConfig = {
    dest: path.resolve(__dirname, "..", "..", "uploads", "profilePhoto"),
    storage: multer.diskStorage({
        destination: (request: Request, file: Express.Multer.File, callback: Callback) => {
            callback(null, path.resolve(__dirname, "..", "..", "uploads", "profilePhoto"));
        },
        filename: (request: Request, file: Express.Multer.File, callback: Callback) => {
            const [ , extensao] = file.mimetype.split("/")

            const fileName = `foto.${extensao}`;
            callback(null, fileName);
        },
    }),
    fileFilter: (request: Request, file: Express.Multer.File, callback: FileFilterCallback) => {
        const allowedMimes = [
            "image/jpeg",
            "image/pjpeg",
            "image/png",
            "image/gif",
        ];

        if(allowedMimes.includes(file.mimetype)) {
            callback(null, true);
        } else {
            callback(new Error("Formato do arquivo invalido!"));
        }
    }
}
