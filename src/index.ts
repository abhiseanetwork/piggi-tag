export class Log {
    static success(message: string): void {
        console.log(`%c ${message}`, "color:green");
    }
    static error(message: string): void {
        console.error(`%c ${message}`, "color:red");
    }
}
