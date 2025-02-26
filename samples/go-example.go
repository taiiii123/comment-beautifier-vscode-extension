package example

/* インポートの
 * コメントも
   * このように
 * 揃えられます
 */
import (
    "context"
    "fmt"
    "sync"
)

// インターフェースの
    // コメントは
  // このように揃います
type ExampleInterface interface {
    DoSomething() error
}

/* 構造体の
 * コメントも
   * このように
 * 揃えられます
 */
type GoExample struct {
    // フィールドの
        // コメントは
      // このように揃います
    name    string
    value   int
    mutex   sync.Mutex
}

// コンストラクタの
    // コメントは
  // このように揃います
func NewGoExample() *GoExample {
    // 初期化の
        // コメントも
      // 揃えられます
    return &GoExample{
        name:  "example",
        value: 0,
    }
}

/* メソッドの
 * コメントも
   * このように
 * 揃えられます
 */
func (g *GoExample) DoSomething() error {
    // メソッド内の
        // コメントも
      // 揃えられます
    g.mutex.Lock()
    defer g.mutex.Unlock()

    // ゴルーチンの
        // コメントは
      // このように揃います
    go func() {
        // ゴルーチン内の
          // コメントも
        // 揃えられます
    }()

    return nil
}

// コンテキストを使用するメソッドの
    // コメントは
  // このように揃います
func (g *GoExample) ProcessWithContext(ctx context.Context) error {
    // チャネル操作の
        // コメントも
      // 揃えられます
    select {
    case <-ctx.Done():
        // コンテキストキャンセル時の
            // コメントも
          // 揃います
        return ctx.Err()
    default:
        // デフォルトケースの
            // コメントも
          // 揃えられます
    }

    return nil
}

/* エラー処理の
 * コメントも
   * このように
 * 揃えられます
 */
func (g *GoExample) handleError() {
    // エラー処理の
        // コメントは
      // このように揃います
    if err := g.DoSomething(); err != nil {
        // エラー時の
            // コメントも
          // 揃えられます
        fmt.Printf("error: %v\n", err)
    }
}

// テスト用の
    // コメントは
  // このように揃います
func main() {
    // メイン関数内の
        // コメントも
      // 揃えられます
    example := NewGoExample()
    example.DoSomething()
}
