// ヘッダーインクルードの
    // コメントは
  // このように揃います
#include <iostream>
#include <vector>
#include <string>

/* 名前空間の
 * コメントも
   * このように
 * 揃えられます
 */
namespace example {

// テンプレートクラスの
    // コメントは
  // このように揃います
template<typename T>
class CppExample {
private:
    // メンバー変数の
        // コメントも
      // 揃えられます
    T value;
    std::vector<T> items;

public:
    /* コンストラクタの
     * コメントも
       * このように
     * 揃います
     */
    CppExample() : value{} {
        // 初期化リストの
          // コメントも
        // 揃えられます
    }

    // メソッドの
        // コメントは
      // このように揃います
    void exampleMethod() {
        // メソッド内の
          // コメントも
        // 揃えられます

        for (const auto& item : items) {
            // 範囲ベースforループの
                // コメントも
              // 揃います
        }
    }

    /* テンプレートメソッドの
     * コメントも
       * このように
     * 揃えられます
     */
    template<typename U>
    void templateMethod(U param) {
        // テンプレートメソッド内の
          // コメントも
        // 揃います
    }

protected:
    // 仮想関数の
        // コメントは
      // このように揃います
    virtual void virtualMethod() {
        // 仮想関数内の
          // コメントも
        // 揃えられます
    }
};

// フリー関数の
    // コメントも
  // 揃えられます
template<typename T>
T calculateValue(T a, T b) {
    // 関数内の
        // コメントも
      // きれいに揃います
    return a + b;
}

} // namespace example

int main() {
    // メイン関数内の
        // コメントは
      // このように揃います

    /* スマートポインタの
     * コメントも
       * このように
     * 揃えられます
     */
    auto example = std::make_unique<example::CppExample<int>>();

    return 0;
}
