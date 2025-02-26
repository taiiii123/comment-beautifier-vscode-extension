// パッケージレベルの
    // コメントは
  // このように揃います

package com.example;

/* インポート文の
 * コメントも
   * このように
 * 揃えられます
 */
import java.util.List;
import java.util.ArrayList;

/**
 * Javadocコメントは
 * このクラスのドキュメントです
 */
public class JavaExample {
    // フィールドの
        // コメントは
      // このように揃います
    private String name;
    private int age;

    /* コンストラクタの
     * コメントも
       * このように
     * 揃えられます
     */
    public JavaExample() {
        // コンストラクタ内の
          // コメントも
        // 揃います
    }

    // パブリックメソッドの
        // コメントは
      // このように揃えられます
    public void exampleMethod() {
        List<String> items = new ArrayList<>();
        // リスト操作の
          // コメントも
        // きれいに揃います

        for (String item : items) {
            // ループ内の
                // コメントも
              // 揃えられます
        }
    }

    /* プライベートメソッドの
     * コメントも
       * このように
     * 揃えられます
     */
    private void helperMethod() {
        // プライベートメソッド内の
          // コメントも
        // 揃います
    }

    // 内部クラスの
        // コメントは
      // このように揃います
    private class InnerClass {
        // 内部クラスのメソッドの
          // コメントも
        // 揃えられます
        void innerMethod() {
            // メソッド内の
                // コメントも
              // 揃います
        }
    }
}
