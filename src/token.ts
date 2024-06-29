import { Span } from "./span";

export enum TokenType {
    Extern,
    Fn,
    Let,
    Return,
    If,
    For,
    While,
    Type,
    True,
    False,
    Constructible,
    Ident,
    LParen,
    RParen,
    Break,
    Continue,
    LSquare,
    RSquare,
    LBrace,
    RBrace,
    Colon,
    Assign,
    EqEq,
    Not,
    NotEq,
    Semi,
    Comma,
    Mut,
    Underscore,
    Number,
    String,
    Plus,
    Minus,
    Star,
    Slash,
    Percent,
    Dot,
    Lt,
    Le,
    Gt,
    Ge,
    And,
    Or,
}

export interface Token {
    ty: TokenType;
    span: Span;
}
