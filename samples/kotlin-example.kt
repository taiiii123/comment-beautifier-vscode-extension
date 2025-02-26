// ファイルレベルの
    // コメントは
  // このように揃います

/* パッケージレベルの
 * コメントも
   * このように
 * 揃えられます
 */
package com.example

/* インポートの
 * コメントも
   * このように
 * 揃えられます
 */
import kotlinx.coroutines.*
import kotlin.properties.Delegates

// インターフェースの
    // コメントは
  // このように揃います
interface ExampleInterface {
    suspend fun doSomething()
}

/**
 * クラスのKDocコメントは
 * このように書きます
 */
class KotlinExample : ExampleInterface {
    // コンパニオンオブジェクトの
        // コメントは
      // このように揃います
    companion object {
        private const val MAX_VALUE = 100
    }

    /* プロパティの
     * コメントも
       * このように
     * 揃えられます
     */
    private var name: String by Delegates.observable("") { _, old, new ->
        // プロパティデリゲートの
            // コメントも
          // 揃えられます
        println("Name changed from $old to $new")
    }

    // データクラスの
        // コメントは
      // このように揃います
    data class InnerData(
        val id: Int,
        val value: String
    )

    // 初期化ブロックの
        // コメントも
      // 揃えられます
    init {
        // 初期化処理の
            // コメントも
          // 揃います
        name = "example"
    }

    /* 中断関数の
     * コメントも
       * このように
     * 揃えられます
     */
    override suspend fun doSomething() = coroutineScope {
        // コルーチンスコープの
            // コメントも
          // 揃えられます
        launch {
            // コルーチン内の
                // コメントも
              // 揃います
            delay(1000L)
        }
    }

    // 拡張関数の
        // コメントは
      // このように揃います
    fun String.processString(): String {
        // 拡張関数内の
            // コメントも
          // 揃えられます
        return this.uppercase()
    }

    /* ジェネリック関数の
     * コメントも
       * このように
     * 揃えられます
     */
    fun <T> processItems(items: List<T>) where T : Comparable<T> {
        // ジェネリック処理の
            // コメントも
          // 揃えられます
        items.sorted().forEach { item ->
            // ラムダ式内の
                // コメントも
              // 揃います
            println(item)
        }
    }

    // シールドクラスの
        // コメントは
      // このように揃います
    sealed class Result {
        // シールドクラスの子クラスの
            // コメントも
          // 揃えられます
        data class Success(val data: String) : Result()
        data class Error(val exception: Exception) : Result()
    }

    // Null安全処理の
        // コメントは
      // このように揃います
    fun processNullable(value: String?) {
        // エルビス演算子の
            // コメントも
          // 揃えられます
        val result = value ?: run {
            // デフォルト処理の
                // コメントも
              // 揃います
            "default"
        }
    }
}

// テストの
    // コメントは
  // このように揃います
@Test
fun testExample() = runTest {
    // テストケースの
        // コメントも
      // 揃えられます
    val example = KotlinExample()
    example.doSomething()
}
