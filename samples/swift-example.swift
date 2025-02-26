// グローバルスコープの
    // コメントは
  // このように揃います

/* 複数行コメントも
 * このように
   * 揃えられます
 */

// インポートの
    // コメントは
  // このように揃います
import Foundation

/* プロトコルの
 * コメントも
   * このように
 * 揃えられます
 */
protocol ExampleProtocol {
    func doSomething() throws
}

/// クラスのドキュメントコメントは
/// このように書きます
class SwiftExample: ExampleProtocol {
    // プロパティの
        // コメントは
      // このように揃います
    private var name: String
    private(set) var value: Int

    // 計算プロパティの
        // コメントも
      // 揃えられます
    var description: String {
        // プロパティオブザーバの
            // コメントも
          // 揃います
        get {
            return "Example: \(name)"
        }
    }

    /* イニシャライザの
     * コメントも
       * このように
     * 揃えられます
     */
    init(name: String) {
        // 初期化の
            // コメントも
          // 揃えられます
        self.name = name
        self.value = 0
    }

    // メソッドの
        // コメントは
      // このように揃います
    func doSomething() throws {
        // エラー処理の
            // コメントも
          // 揃えられます
        guard value >= 0 else {
            throw NSError(domain: "ExampleError", code: -1)
        }

        // クロージャの
            // コメントは
          // このように揃います
        let numbers = [1, 2, 3]
        numbers.forEach { number in
            // クロージャ内の
                // コメントも
              // 揃えられます
            print(number)
        }
    }

    /* 非同期メソッドの
     * コメントも
       * このように
     * 揃えられます
     */
    func asyncOperation() async throws {
        // 非同期処理の
            // コメントも
          // 揃えられます
        try await Task.sleep(nanoseconds: 1_000_000_000)
    }

    // ジェネリックメソッドの
        // コメントは
      // このように揃います
    func process<T: Comparable>(_ items: [T]) {
        // ジェネリック処理の
            // コメントも
          // 揃えられます
        items.sorted().forEach { item in
            print(item)
        }
    }
}

// 列挙型の
    // コメントは
  // このように揃います
enum ExampleEnum {
    // 列挙型ケースの
        // コメントも
      // 揃えられます
    case success
    case failure(Error)

    /* 関連値の
     * コメントも
       * このように
     * 揃えられます
     */
    var description: String {
        switch self {
        case .success:
            // スイッチケースの
                // コメントも
              // 揃います
            return "Success"
        case .failure(let error):
            return "Failure: \(error)"
        }
    }
}

// エクステンションの
    // コメントは
  // このように揃います
extension SwiftExample {
    // エクステンション内のメソッドの
        // コメントも
      // 揃えられます
    func additionalMethod() {
        // メソッド内の
            // コメントも
          // 揃います
    }
}

// テストの
    // コメントは
  // このように揃います
#if DEBUG
class ExampleTests: XCTestCase {
    func testExample() {
        // テストケースの
            // コメントも
          // 揃えられます
        let example = SwiftExample(name: "test")
        XCTAssertNoThrow(try example.doSomething())
    }
}
#endif
