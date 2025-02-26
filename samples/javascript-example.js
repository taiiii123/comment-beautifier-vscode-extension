// モジュールレベルの
    // コメントは
  // このように揃います

/* インポートの
 * コメントも
   * このように
 * 揃えられます
 */
import { something } from './module';

// クラスの
    // コメントは
  // このように揃います
class JavaScriptExample {
    // JavaScriptのコメントは
        // このように
      // 揃えられます

    /* 複数行コメントも
     * このように
       * 揃えられます
     */

    // コンストラクタの
        // コメントも
      // 揃えられます
    constructor() {
        // 初期化の
            // コメントは
          // このように揃います
        this.value = 0;
    }

    /* メソッドの
     * コメントも
       * このように
     * 揃えられます
     */
    exampleMethod() {
        // 配列操作の
            // コメントは
          // このように揃います
        const array = [1, 2, 3];

        // forEachの
            // コメントも
          // 揃えられます
        array.forEach(item => {
            // コールバック内の
                // コメントも
              // 揃います
            console.log(item);
        });
    }

    // 非同期メソッドの
        // コメントは
      // このように揃います
    async asyncMethod() {
        try {
            // try-catch内の
                // コメントも
              // 揃えられます
            await this.someAsyncOperation();
        } catch (error) {
            /* エラー処理の
             * コメントも
               * このように
             * 揃います
             */
            console.error(error);
        }
    }

    /* プライベートメソッドの
     * コメントも
       * このように
     * 揃えられます
     */
    #privateMethod() {
        // プライベートメソッド内の
            // コメントも
          // 揃います
        return this.value;
    }

    // ゲッターの
        // コメントは
      // このように揃います
    get someValue() {
        // ゲッター内の
            // コメントも
          // 揃えられます
        return this.value;
    }
}

// グローバルスコープの
    // コメントも
  // 揃えられます

/* 複数行の
 * グローバルコメントも
   * このように
 * 揃えられます
 */

/* 関数定義の
 * コメントも
   * このように
 * 揃えられます
 */
function globalFunction() {
    // 関数内の
        // コメントは
      // このように揃います
    return true;
}

// IIFEの
    // コメントは
  // このように揃います
(() => {
    // IIFE内の
        // コメントも
      // 揃えられます
    const example = new JavaScriptExample();
})();
