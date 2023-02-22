export interface ConsoleModel<T> {
    columns: Array<T>;
    rowsData: Array<T>;
}

export interface HeaderConsole {
    name: string;
    isActive: boolean;
}