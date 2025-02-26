// インターフェースの
    // コメントは
  // このように揃います
interface ExampleInterface {
    name: string;
    age: number;
}

/* 型定義の
 * コメントも
   * このように
 * 揃えられます
 */
type ExampleType = {
    id: number;
    value: string;
};

class TypeScriptExample {
    // プロパティの
        // コメントは
      // このように揃います
    private name: string;
    private age: number;

    constructor() {
        // コンストラクタ内の
          // コメントも
        // 揃います
    }

    // メソッドの
        // コメントは
      // このように揃えられます
    public async exampleMethod<T>(param: T): Promise<void> {
        // ジェネリクスを使用したメソッド内の
          // コメントも
        // きれいに揃います

        const array: number[] = [1, 2, 3];
        // 配列操作の
          // コメントも
        // 揃えられます
    }

    /* プライベートメソッドの
     * コメントも
       * このように
     * 揃えられます
     */
    private helperMethod(): void {
        // プライベートメソッド内の
          // コメントも
        // 揃います
    }
}

// デコレータの
    // コメントも
  // 揃えられます
@decorator
class DecoratedClass {
    // デコレートされたクラス内の
        // コメントも
      // 揃います
}
