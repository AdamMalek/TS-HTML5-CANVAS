export interface MouseInfo{
    position:Vector2,
    buttonPressed: MouseButton
};

export interface Vector2{
    x:number,
    y:number
};

export interface Rect{
    pos:Vector2,
    width:number,
    height:number
}

export interface Line{
    A: Vector2,
    B: Vector2
}

export enum MouseButton{
    LeftMouseButton = 0,
    MiddleMouseButton,
    RightMouseButton
};

export interface KeyboardButton{
    isCtrl:boolean,    
    isAlt:boolean,    
    isShift:boolean,
    keys:number[]
};