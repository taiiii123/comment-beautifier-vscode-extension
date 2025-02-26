"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TypeScriptExample {
    // プロパティの
    // コメントは
    // このように揃います
    name;
    age;
    constructor() {
        // コンストラクタ内の
        // コメントも
        // 揃います
        this.name = "example";
        this.age = 20;
    }
    // メソッドの
    // コメントは
    // このように揃えられます
    async exampleMethod(param) {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
        // ジェネリクスを使用したメソッド内の
        // コメントも
        // きれいに揃います
        const array = [1, 2, 3];
        // 配列操作の
        // コメントも
        // 揃えられます
    }
    /* プライベートメソッドの
     * コメントも
       * このように
     * 揃えられます
     */
    helperMethod() {
        // プライベートメソッド内の
        // コメントも
        // 揃います
    }
}
//# sourceMappingURL=typescript-example.js.map