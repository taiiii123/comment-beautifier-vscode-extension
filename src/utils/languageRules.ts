interface CommentRule {
    single: string[];
    multi?: { start: string; end: string }[];
}

export const LANGUAGE_COMMENT_RULES: { [key: string]: CommentRule } = {
    'typescript': { single: ['//'], multi: [{ start: '/*', end: '*/' }] },
    'javascript': { single: ['//'], multi: [{ start: '/*', end: '*/' }] },
    'python': { single: ['#'] },
    'java': { single: ['//'], multi: [{ start: '/*', end: '*/' }] },
    'c': { single: ['//'], multi: [{ start: '/*', end: '*/' }] },
    'cpp': { single: ['//'], multi: [{ start: '/*', end: '*/' }] },
    'csharp': { single: ['//'], multi: [{ start: '/*', end: '*/' }] },
    'php': { single: ['//', '#'], multi: [{ start: '/*', end: '*/' }] },
    'ruby': { single: ['#'] },
    'go': { single: ['//'], multi: [{ start: '/*', end: '*/' }] },
    'rust': { single: ['//'], multi: [{ start: '/*', end: '*/' }] },
    'swift': { single: ['//'], multi: [{ start: '/*', end: '*/' }] },
    'gradle-kotlin-dsl': { single: ['//'], multi: [{ start: '/*', end: '*/' }] },
    'sql': { single: ['--'], multi: [{ start: '/*', end: '*/' }] }
};
