export interface ConsoleDto {
    perspectives: Perspective[];
    objectives:   Objective[];
    comments:     Comment[];
}

export interface Comment {
    id:      number;
    date:    string;
    author:  string;
    comment: string;
}

export interface Objective {
    id:          number;
    code:        string;
    name:        string;
    description: string;
    perspective: Perspective;
}

export interface Perspective {
    id:   number;
    name: string;
}
